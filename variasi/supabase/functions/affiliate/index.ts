import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { v4 as uuidv4 } from 'https://esm.sh/uuid'

const CorsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

console.log("Affiliate Function Initialized")

serve(async (req) => {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: CorsHeaders })
    }

    try {
        const { phone } = await req.json()

        if (!phone) {
            throw new Error('Phone number is required')
        }

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

        if (!supabaseKey) {
            throw new Error("Server configuration error: SUPABASE_SERVICE_ROLE_KEY is missing.")
        }

        const supabase = createClient(supabaseUrl, supabaseKey)

        // 1. Find or Create Affiliate
        let affiliateId;

        const { data: existingAffiliate, error: findError } = await supabase
            .from('Affiliate')
            .select('id')
            .eq('phone', phone)
            .maybeSingle()

        if (findError) {
            console.error("Error finding affiliate:", findError)
            throw new Error("Database error checking affiliate")
        }

        if (existingAffiliate) {
            affiliateId = existingAffiliate.id
        } else {
            // Create new
            const newId = uuidv4()
            const { error: createError } = await supabase
                .from('Affiliate')
                .insert({
                    id: newId,
                    phone: phone,
                    updatedAt: new Date().toISOString()
                })

            if (createError) {
                console.error("Error creating affiliate:", createError)
                throw new Error("Failed to register affiliate")
            }
            affiliateId = newId
        }

        // 2. Get Stats
        // Count users referred by this affiliate who have a successful payment? 
        // Or just count users referred? The request said "track affiliate, referrals and their commisions"
        // Let's count all referrals (User with affiliateId) for now, and maybe count successful ones if needed.
        // Assuming every referral is a potential commission. 
        // For accurate commission, we should check Payment status = 'settlement' for those users.

        // Get users referred by this affiliate
        const { data: referrals, error: referralError } = await supabase
            .from('User')
            .select(`
                id, 
                name,
                phone,
                createdAt,
                payments:Payment(status, grossAmount)
            `)
            .eq('affiliateId', affiliateId)

        if (referralError) {
            console.error("Error fetching referrals:", referralError)
        }

        const totalReferrals = referrals?.length || 0

        // Calculate commission: Count payments with status 'settlement'
        let actualCommission = 0
        let pendingCommission = 0
        let successfulReferrals = 0

        referrals?.forEach(user => {
            const successfulPayment = user.payments.find((p: any) => p.status === 'success')
            const pendingPayment = user.payments.find((p: any) => p.status === 'pending')

            if (successfulPayment) {
                successfulReferrals++
                // Commission 15% from grossAmount
                actualCommission += (successfulPayment.grossAmount * 0.15)
            } else if (pendingPayment) {
                // Pending Commission 15%
                pendingCommission += (pendingPayment.grossAmount * 0.15)
            }
        })

        // Map referrals to a displayable list
        const referralsList = referrals?.map(user => {
            const successfulPayment = user.payments.find((p: any) => p.status === 'success')
            const pendingPayment = user.payments.find((p: any) => p.status === 'pending')

            let status = 'Registered';
            if (successfulPayment) status = 'Paid';
            else if (pendingPayment) status = 'Pending';

            // Mask Phone: 08123456789 -> 0812****789
            const maskedPhone = user.phone.replace(/(\d{4})\d+(\d{3})/, '$1****$2')

            return {
                name: user.name,
                phone: maskedPhone,
                status: status,
                joinedAt: user.createdAt
            }
        })

        return new Response(
            JSON.stringify({
                affiliateId,
                phone,
                stats: {
                    totalReferrals,
                    successfulReferrals,
                    actualCommission,
                    pendingCommission
                },
                referralsList: referralsList || []
            }),
            {
                headers: { ...CorsHeaders, 'Content-Type': 'application/json' },
                status: 200
            }
        )

    } catch (error) {
        console.error(error)
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: { ...CorsHeaders, 'Content-Type': 'application/json' },
                status: 400
            }
        )
    }
})
