
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CorsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

console.log("Submit Registration Function Initialized")

serve(async (req) => {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: CorsHeaders })
    }

    try {
        const { name, email, phone, source, finishUrl } = await req.json()

        // Validate input
        if (!name || !email || !phone || !source) {
            throw new Error('Missing required fields')
        }

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

        if (!supabaseKey) {
            console.error("SUPABASE_SERVICE_ROLE_KEY is missing!")
            throw new Error("Server configuration error: SUPABASE_SERVICE_ROLE_KEY is missing.")
        }

        const supabase = createClient(supabaseUrl, supabaseKey)

        // 1. Check if user exists or create new
        let userId;

        // Check if email exists
        const { data: existingUser, error: findError } = await supabase
            .from('User')
            .select('id')
            .eq('email', email)
            .single()

        if (existingUser) {
            userId = existingUser.id;
            // Update existing user
            const { error: updateError } = await supabase
                .from('User')
                .update({
                    name,
                    phone,
                    source,
                    updatedAt: new Date().toISOString()
                })
                .eq('id', userId)

            if (updateError) console.error("Update User Error", updateError)
        } else {
            // Insert new user
            const { data: newUser, error: insertError } = await supabase
                .from('User')
                .insert({
                    email,
                    name,
                    phone,
                    source,
                    updatedAt: new Date().toISOString()
                })
                .select('id')
                .single()

            if (insertError) {
                console.error("Insert User Error", insertError)
                throw new Error("Failed to register user: " + JSON.stringify(insertError))
            }
            userId = newUser.id
        }

        const midtransServerKey = Deno.env.get('MIDTRANS_SERVER_KEY')

        if (!midtransServerKey) {
            throw new Error("Server configuration error: MIDTRANS_SERVER_KEY is missing.")
        }

        const midtransIsProduction = Deno.env.get('MIDTRANS_IS_PRODUCTION') === 'true'
        const midtransUrl = midtransIsProduction
            ? 'https://app.midtrans.com/snap/v1/transactions'
            : 'https://app.sandbox.midtrans.com/snap/v1/transactions'

        // Create unique Order ID
        const orderId = `ORDER-${source}-${Date.now()}-${Math.floor(Math.random() * 1000)}`
        const grossAmount = 149000

        // Determine Redirect URL Logic (Fallback if finishUrl not provided)
        let baseUrl = 'http://localhost:3000';
        if (source === 'lp-1') baseUrl = 'http://localhost:3001';
        else if (source === 'lp-2') baseUrl = 'http://localhost:3002';
        else if (source === 'lp-3') baseUrl = 'http://localhost:3003';
        else if (source === 'lp-4') baseUrl = 'http://localhost:3004';
        else if (source === 'lp-5') baseUrl = 'http://localhost:3005';
        else if (source === 'lp-6') baseUrl = 'http://localhost:3006';
        else if (source === 'lp-7') baseUrl = 'http://localhost:3007';

        // Override with PROD_URL if configured in Environment Variables
        const prodUrl = Deno.env.get(`PROD_URL_${source.toUpperCase().replace('-', '_')}`);
        if (prodUrl) {
            baseUrl = prodUrl;
        }

        let finishRedirectUrl = finishUrl;

        if (!finishRedirectUrl) {
            finishRedirectUrl = `${baseUrl}/?page=thank-you`;
        }

        // Always append order_id to the finishRedirectUrl
        const separator = finishRedirectUrl.includes('?') ? '&' : '?';
        finishRedirectUrl = `${finishRedirectUrl}${separator}order_id=${orderId}`;

        // Call Midtrans Snap API
        const midtransPayload = {
            transaction_details: {
                order_id: orderId,
                gross_amount: grossAmount
            },
            customer_details: {
                first_name: name,
                email: email,
                phone: phone
            },
            item_details: [{
                id: 'workshop-01',
                price: grossAmount,
                quantity: 1,
                name: 'Workshop Publikasi Ilmiah'
            }],
            credit_card: {
                secure: true
            },
            callbacks: {
                finish: finishRedirectUrl
            }
        }

        const midtransResponse = await fetch(midtransUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${btoa(midtransServerKey + ':')}`
            },
            body: JSON.stringify(midtransPayload)
        })

        const midtransData = await midtransResponse.json()

        if (!midtransResponse.ok) {
            console.error('Midtrans Error:', midtransData)
            throw new Error(midtransData.error_messages?.[0] || 'Failed to create transaction')
        }

        // 3. Save Payment Record
        const { error: paymentError } = await supabase
            .from('Payment')
            .insert({
                userId: userId,
                orderId: orderId,
                grossAmount: grossAmount,
                status: 'pending',
                source: source,
                snapToken: midtransData.token,
                snapRedirectUrl: midtransData.redirect_url,
                updatedAt: new Date().toISOString()
            })

        if (paymentError) {
            console.error("Payment Record Error", paymentError)
            throw new Error("Failed to save payment record: " + paymentError.message)
        }

        // Return the token and orderId
        return new Response(
            JSON.stringify({
                snapToken: midtransData.token,
                redirectUrl: midtransData.redirect_url,
                orderId: orderId
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
