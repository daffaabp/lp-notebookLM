
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
                        const resendFromEmail = Deno.env.get('RESEND_FROM_EMAIL') ?? 'Kelas Inovatif <noreply@email.bakatkreatif.com>'
                        const whatsappGroupLink = Deno.env.get('WHATSAPP_GROUP_LINK')

                        if (resendApiKey) {
                            const emailHtml = `
                                <!DOCTYPE html>
                                <html>
                                <head>
                                  <meta charset="UTF-8">
                                  <title>Pembayaran Berhasil - Detail Event</title>
                                  <style>
                                    body {
                                      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                                      line-height: 1.6;
                                      color: #333;
                                      background-color: #f6f9fc;
                                      margin: 0;
                                      padding: 20px;
                                    }
                                    .container {
                                      max-width: 600px;
                                      margin: 0 auto;
                                      background-color: #ffffff;
                                      padding: 40px;
                                      border-radius: 8px;
                                      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                                    }
                                    .header {
                                      text-align: center;
                                      margin-bottom: 30px;
                                    }
                                    .header h1 {
                                      color: #1a1a1a;
                                      margin: 0;
                                      font-size: 24px;
                                    }
                                    .content {
                                      margin-bottom: 30px;
                                    }
                                    .info-box {
                                      background-color: #f8f9fa;
                                      padding: 15px;
                                      border-radius: 6px;
                                      margin: 20px 0;
                                      font-size: 14px;
                                      color: #555;
                                    }
                                    .btn {
                                      display: inline-block;
                                      padding: 14px 28px;
                                      background-color: #10B981;
                                      color: #ffffff !important;
                                      text-decoration: none;
                                      border-radius: 6px;
                                      font-weight: bold;
                                      text-align: center;
                                      margin-top: 10px;
                                    }
                                    .btn:hover {
                                      background-color: #059669;
                                    }
                                    .cs-box {
                                      background-color: #eefcf6;
                                      padding: 15px;
                                      border-radius: 6px;
                                      margin-top: 25px;
                                      font-size: 14px;
                                      color: #065f46;
                                    }
                                    .footer {
                                      text-align: center;
                                      font-size: 12px;
                                      color: #999;
                                      margin-top: 30px;
                                    }
                                    .wa-link {
                                      color: #10B981;
                                      font-weight: bold;
                                      text-decoration: none;
                                      display: inline-block;
                                      margin-top: 6px;
                                    }
                                    .small-note {
                                      margin: 10px 0 0;
                                      font-size: 12px;
                                      color: #065f46;
                                      opacity: 0.9;
                                    }
                                  </style>
                                </head>

                                <body>
                                  <div class="container">
                                    <div class="header">
                                      <h1>Pembayaran Berhasil! 🎉</h1>
                                    </div>

                                    <div class="content">
                                      <p>Halo <strong>${userName}</strong>,</p>

                                      <p>
                                        Terima kasih telah melakukan pembayaran event di Kelas Inovatif. Kami informasikan bahwa pembayaran Anda
                                        telah kami terima dan <strong>berhasil diverifikasi</strong>.
                                      </p>

                                      <div class="info-box">
                                        <strong>Order ID:</strong> ${order_id}<br>
                                        <strong>Status Pembayaran:</strong> Lunas
                                      </div>

                                      <p>Berikut adalah detail event yang telah Anda daftarkan:</p>

                                      <div class="info-box">
                                        <strong>Judul Event:</strong><br>
                                        Strategi Menyulap Skripsi, Tesis, dan Disertasi menjadi manuskrip ilmiah siap publikasi
                                        <br><br>
                                        <strong>Hari / Tanggal:</strong> Sabtu, 27 Desember 2025<br>
                                        <strong>Waktu:</strong> 14:00 – 16:00 WIB<br>
                                        <strong>Media:</strong> Zoom Meeting
                                      </div>

                                      <p>
                                        Untuk mendapatkan <strong>link Zoom</strong> dan informasi teknis lainnya,
                                        silakan bergabung ke <strong>Grup WhatsApp Peserta</strong> melalui tombol di bawah ini.
                                      </p>

                                      ${whatsappGroupLink ? `
                                      <div style="text-align: center;">
                                        <a href="${whatsappGroupLink}" class="btn">
                                          Gabung Grup WhatsApp Peserta
                                        </a>
                                      </div>
                                      ` : ''}

                                      <p style="margin-top: 25px;">
                                        <em>Catatan:</em><br>
                                        Kami menyarankan Anda untuk bergabung ke Zoom
                                        <strong>10–15 menit lebih awal</strong>
                                        guna memastikan koneksi dan perangkat audio berjalan dengan baik.
                                      </p>

                                      <div class="cs-box">
                                        <strong>Butuh Bantuan?</strong><br>
                                        Jika Anda mengalami kendala atau memiliki pertanyaan,
                                        silakan hubungi <strong>Customer Service</strong> kami:
                                        <br><br>

                                        <strong>WhatsApp Admin:</strong> 0857-1220-8535<br>

                                        <a
                                          href="https://wa.me/6285712208535?text=Halo%20Admin%2C%20saya%20peserta%20event%20%22Strategi%20Menyulap%20Skripsi%2C%20Tesis%2C%20dan%20Disertasi%20menjadi%20manuskrip%20ilmiah%20siap%20publikasi%22.%20Saya%20butuh%20bantuan%20terkait%20akses%20Zoom.%20Order%20ID%3A%20${order_id}"
                                          target="_blank"
                                          class="wa-link"
                                        >
                                          📱 Chat Admin (wa.me) — dengan pesan otomatis
                                        </a>
                                        <br>

                                        <a
                                          href="https://web.whatsapp.com/send?phone=6285712208535"
                                          target="_blank"
                                          class="wa-link"
                                        >
                                          💻 Chat Admin via WhatsApp Web
                                        </a>

                                        <p class="small-note">
                                          Jika link tidak bisa dibuka karena pembatasan jaringan, silakan simpan nomor admin di atas dan chat manual.
                                        </p>
                                      </div>
                                    </div>

                                    <div class="footer">
                                      <p>
                                        Customer Service:
                                        <a
                                          href="https://wa.me/6285712208535"
                                          target="_blank"
                                          class="wa-link"
                                        >
                                          WhatsApp 0857-1220-8535
                                        </a>
                                        <br>
                                        &copy; ${new Date().getFullYear()} Kelas Inovatif. All rights reserved.
                                      </p>
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
