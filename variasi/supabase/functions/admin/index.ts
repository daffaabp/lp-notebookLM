import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CorsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

console.log("Admin Function Initialized")

serve(async (req) => {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: CorsHeaders })
    }

    try {
        const { username, password } = await req.json()

        const ADMIN_USERNAME = Deno.env.get('ADMIN_USERNAME') || 'admin'
        const ADMIN_PASSWORD = Deno.env.get('ADMIN_PASSWORD') || 'admin123'

        if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
            return new Response(
                JSON.stringify({ error: 'Invalid credentials' }),
                { headers: { ...CorsHeaders, 'Content-Type': 'application/json' }, status: 401 }
            )
        }

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        const supabase = createClient(supabaseUrl, supabaseKey)

        // 1. Fetch All Affiliates with their Users & Payments
        // We select affiliates and nested users -> payments
        const { data: affiliates, error: affError } = await supabase
            .from('Affiliate')
            .select(`
                id,
                phone,
                users:User(
                    id,
                    name,
                    phone,
                    createdAt,
                    payments:Payment(status, grossAmount)
                )
            `)

        if (affError) {
            throw new Error("Failed to fetch affiliates: " + affError.message)
        }

        // Process Affiliates Stats
        const affiliateStats = affiliates.map((aff: any) => {
            let actualCommission = 0
            let pendingCommission = 0
            let totalReferrals = aff.users?.length || 0

            aff.users?.forEach((user: any) => {
                const successfulPayment = user.payments.find((p: any) => p.status === 'success')
                const pendingPayment = user.payments.find((p: any) => p.status === 'pending')

                if (successfulPayment) {
                    actualCommission += (successfulPayment.grossAmount * 0.15)
                } else if (pendingPayment) {
                    pendingCommission += (pendingPayment.grossAmount * 0.15)
                }
            })

            return {
                id: aff.id,
                phone: aff.phone,
                totalReferrals,
                actualCommission,
                pendingCommission
            }
        })

        // 2. Fetch Pending Referrals (Users with affiliateId AND pending payment OR no payment?)
        // The user said "track ... which referrals need to be follow up (to actually make payment)"
        // This implies users who REGISTERED but didn't PAY (status pending or no success payment).
        // Let's filter from the already fetched `affiliates` data to minimize DB calls, 
        // OR fetch all users with pending payments if we want global coverage. 
        // But "referrals" usually implies those under an affiliate.
        // Let's extract from the loaded data.

        const pendingReferrals: any[] = []

        affiliates.forEach((aff: any) => {
            aff.users?.forEach((user: any) => {
                const successfulPayment = user.payments.find((p: any) => p.status === 'success')
                // If NO success payment, they are a candidate for follow up.
                // Especially if they have a 'pending' payment or just no payment.
                if (!successfulPayment) {
                    // Check if they have a pending payment to be more specific?
                    const pendingPayment = user.payments.find((p: any) => p.status === 'pending')

                    // We can include them if they have pending OR just registered. 
                    // Let's prioritize explicit 'pending' status for "Follow Up" context (abandoned cart).
                    // Or maybe just everyone who hasn't paid?
                    // Let's stick to "Pending" status for now as it shows intent.
                    if (pendingPayment) {
                        pendingReferrals.push({
                            name: user.name,
                            phone: user.phone,
                            affiliatePhone: aff.phone,
                            joinedAt: user.createdAt,
                            status: 'Pending'
                        })
                    }
                }
            })
        })

        return new Response(
            JSON.stringify({
                affiliates: affiliateStats,
                pendingReferrals
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
