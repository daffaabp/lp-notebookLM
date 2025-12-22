
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import * as crypto from "https://deno.land/std@0.177.0/node/crypto.ts";

console.log("Payment Webhook Function Initialized")

serve(async (req) => {
    if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 })
    }

    try {
        const notification = await req.json()

        // Extract variables
        const { order_id, transaction_status, fraud_status, status_code, gross_amount, signature_key } = notification

        // Verify signature
        const midtransServerKey = Deno.env.get('MIDTRANS_SERVER_KEY') ?? ''
        const hash = crypto.createHash('sha512').update(`${order_id}${status_code}${gross_amount}${midtransServerKey}`).digest('hex')

        if (hash !== signature_key) {
            return new Response('Invalid Signature', { status: 403 })
        }

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' // Must use Service Role to bypass potential RLS if needed, or just for admin tasks
        const supabase = createClient(supabaseUrl, supabaseKey)

        // Map Midtrans status to our status
        let status = 'pending'
        if (transaction_status === 'capture') {
            if (fraud_status === 'challenge') {
                status = 'challenge'
            } else if (fraud_status === 'accept') {
                status = 'success'
            }
        } else if (transaction_status === 'settlement') {
            status = 'success'
        } else if (transaction_status === 'cancel' || transaction_status === 'deny' || transaction_status === 'expire') {
            status = 'failed'
        } else if (transaction_status === 'pending') {
            status = 'pending'
        }

        // Update Payment in Database
        // Assuming we have a 'payments' table. We can use Supabase client to update it directly.
        const { error } = await supabase
            .from('Payment') // Note: Prisma models usually map to Capitalized table names, but Supabase/Postgres is case sensitive if quoted, usually lowercase. Check Prisma mapping.
            // Prisma default: models are PascalCase, maps to proper case in DB. 
            // If we use `prisma db push`, it might create "Payment" or "payment" depending on mapping.
            // Standard Prisma (Postgres) maps `model Payment` to `"Payment"` or `public."Payment"`.
            // I'll assume standard naming. I should check the table name after `prisma db push`.
            // For now, I'll try "Payment" first.
            .update({
                status: status,
                transactionId: notification.transaction_id,
                paymentType: notification.payment_type,
                metadata: notification,
                updatedAt: new Date().toISOString()
            })
            .eq('orderId', order_id)

        if (error) {
            console.error('Database Update Error:', error)
            throw error
        }

        console.log(`Updated order ${order_id} to status ${status}`)

        // Send Email if status is success
        if (status === 'success') {
            try {
                // Fetch User Email linked to this Payment
                const { data: paymentData, error: fetchError } = await supabase
                    .from('Payment')
                    .select('userId')
                    .eq('orderId', order_id)
                    .single()

                if (fetchError || !paymentData) {
                    console.error('Failed to fetch payment data for email:', fetchError)
                } else {
                    const { data: userData, error: userError } = await supabase
                        .from('User')
                        .select('email, name')
                        .eq('id', paymentData.userId)
                        .single()

                    if (userError || !userData) {
                        console.error('Failed to fetch user data for email:', userError)
                    } else {
                        const userEmail = userData.email
                        const userName = userData.name
                        const resendApiKey = Deno.env.get('RESEND_API_KEY')
                        const resendFromEmail = Deno.env.get('RESEND_FROM_EMAIL') ?? 'Kelas Inovatif <admin@kelasinovatif.com>'
                        const whatsappGroupLink = Deno.env.get('WHATSAPP_GROUP_LINK')

                        if (resendApiKey) {
                            const emailHtml = `
                                <!DOCTYPE html>
                                <html>
                                <head>
                                    <style>
                                        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f6f9fc; margin: 0; padding: 20px; }
                                        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                                        .header { text-align: center; margin-bottom: 30px; }
                                        .header h1 { color: #1a1a1a; margin: 0; font-size: 24px; }
                                        .content { margin-bottom: 30px; }
                                        .order-info { background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin: 20px 0; font-size: 14px; color: #555; }
                                        .btn { display: inline-block; padding: 14px 28px; background-color: #10B981; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center; margin-top: 10px; }
                                        .btn:hover { background-color: #059669; }
                                        .footer { text-align: center; font-size: 12px; color: #999; margin-top: 30px; }
                                    </style>
                                </head>
                                <body>
                                    <div class="container">
                                        <div class="header">
                                            <h1>Pembayaran Berhasil! 🎉</h1>
                                        </div>
                                        <div class="content">
                                            <p>Halo <strong>${userName}</strong>,</p>
                                            <p>Terima kasih banyak! Pembayaran Anda telah kami terima dan verifikasi.</p>
                                            
                                            <div class="order-info">
                                                <strong>Order ID:</strong> ${order_id}<br>
                                                <strong>Status:</strong> Lunas
                                            </div>

                                            <p>Sekarang, langkah selanjutnya adalah bergabung ke Grup WhatsApp Peserta untuk mendapatkan informasi teknis dan link Zoom webinar.</p>

                                            ${whatsappGroupLink ? `
                                            <div style="text-align: center;">
                                                <a href="${whatsappGroupLink}" class="btn">Gabung Grup WhatsApp Sekarang</a>
                                            </div>
                                            ` : ''}

                                            <p style="margin-top: 30px;">Jika tombol di atas tidak berfungsi, Anda juga dapat menghubungi admin kami untuk bantuan.</p>
                                        </div>
                                        <div class="footer">
                                            <p>&copy; ${new Date().getFullYear()} Kelas Inovatif. All rights reserved.</p>
                                        </div>
                                    </div>
                                </body>
                                </html>
                            `

                            const emailResponse = await fetch('https://api.resend.com/emails', {
                                method: 'POST',
                                headers: {
                                    'Authorization': `Bearer ${resendApiKey}`,
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    from: resendFromEmail,
                                    to: [userEmail],
                                    subject: 'Pembayaran Berhasil - Kelas Inovatif',
                                    html: emailHtml
                                })
                            })

                            if (!emailResponse.ok) {
                                const errorData = await emailResponse.json()
                                console.error('Resend API Error:', errorData)
                            } else {
                                console.log(`Email sent successfully to ${userEmail}`)
                            }
                        } else {
                            console.log('RESEND_API_KEY is not set. Skipping email.')
                        }
                    }
                }
            } catch (emailErr) {
                console.error('Unexpected error sending email:', emailErr)
            }
        }

        return new Response(JSON.stringify({ status: 'ok' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        })

    } catch (error) {
        console.error('Webhook Error:', error)
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        })
    }
})
