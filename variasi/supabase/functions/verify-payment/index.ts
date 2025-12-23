
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CorsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

console.log("Verify Payment Function Initialized")

serve(async (req) => {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: CorsHeaders })
    }

    try {
        const { orderId } = await req.json()

        if (!orderId) {
            throw new Error('Missing Order ID')
        }

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        const supabase = createClient(supabaseUrl, supabaseKey)

        // Check payment status
        const { data: payment, error } = await supabase
            .from('Payment')
            .select('status, source')
            .eq('orderId', orderId)
            .single()

        if (error || !payment) {
            throw new Error("Payment not found or access denied")
        }

        // Logic to allow access
        // Allow 'success', 'settlement', 'capture'
        const allowedStatuses = ['success', 'settlement', 'capture']
        const isPaid = allowedStatuses.includes(payment.status) || (payment.status === 'pending') // TEMPORARY: Allow pending for testing if needed, but user asked for "already paid".
        // Strict check:
        // const isPaid = allowedStatuses.includes(payment.status) 

        // However, standard Midtrans flow updates status asynchronously via webhook. 
        // If user is redirected immediately, status might still be pending. 
        // We might need to trust 'pending' IF the source is trusted, but for 'only paid', strictly it should be success.
        // Let's use strict check but allow 'pending' with a warning message on frontend perhaps? 
        // Or if 'pending', we tell them "Payment is being processed, refresh in a moment".
        // User said: "only user who have paid".
        // I will stick to Strict Check but since Webhook might delay, I will also allow "pending" IF transaction_status check confirms it (which needs API call to Midtrans).
        // For simpler implementation now: Allow success/settlement/capture. If pending, tell user to wait.

        // User request: "only user yg sudah membayar".
        if (allowedStatuses.includes(payment.status)) {
            const groupLink = Deno.env.get('WA_GROUP_LINK') || 'https://chat.whatsapp.com/PLACEHOLDER_GROUP_LINK'

            return new Response(
                JSON.stringify({
                    valid: true,
                    groupLink: groupLink,
                    message: "Payment verified"
                }),
                {
                    headers: { ...CorsHeaders, 'Content-Type': 'application/json' },
                    status: 200
                }
            )
        } else {
            return new Response(
                JSON.stringify({
                    valid: false,
                    message: "Payment status is " + payment.status + ". Please complete payment or wait for confirmation."
                }),
                {
                    headers: { ...CorsHeaders, 'Content-Type': 'application/json' },
                    status: 200
                }
            )
        }

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
