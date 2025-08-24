import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type Topic = 'trial' | 'pilates' | 'gyrotonic' | 'question'
type Body = {
  name?: string
  email?: string
  phone?: string
  topic?: Topic
  message?: string
  website?: string // honeypot
}

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_TO = process.env.CONTACT_TO
const CONTACT_FROM = process.env.CONTACT_FROM

function isValidEmail(v: string) {
  return /\S+@\S+\.\S+/.test(v)
}

export async function POST(req: Request) {
  try {
    if (!CONTACT_TO || !CONTACT_FROM) {
      return NextResponse.json({ ok: false, error: 'Missing email envs' }, { status: 500 })
    }

    const { name, email, phone, topic, message, website } = (await req.json()) as Body

    // honeypot
    if (website && website.trim() !== '') {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message || message.trim().length < 5 || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
    }

    // ---- TEXT fallbacks (define these!) ----
    const adminText = `
New contact submission

Name: ${name}
Email: ${email}
Phone: ${phone || '-'}
Topic: ${topic || '-'}
Message:
${message}
    `.trim()

    const userText = `
Hi ${name},

Thanks for reaching out! We've received your message and will respond within 1–2 business days.

If it's urgent, please call us at [insert phone].

— embodiedpresence
    `.trim()

    // ---- 1) Notify you (admin) ----
    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject: `New contact: ${name} (${topic || 'general'})`,
      text: adminText, // fallback
      html: `
      <table style="width:100%;max-width:560px;margin:0 auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1f2937">
        <tr><td style="padding:16px 0">
          <h2 style="margin:0 0 8px;color:#111827">New contact submission</h2>
          <p style="margin:0 0 16px;color:#4b5563">You received a new message from the website.</p>
          <div style="border:1px solid #e5e7eb;border-radius:12px;padding:16px;background:#ffffff">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || '—'}</p>
            <p><strong>Topic:</strong> ${topic || '—'}</p>
            <p style="margin-top:12px"><strong>Message:</strong></p>
            <pre style="white-space:pre-wrap;font-family:inherit;background:#f9fafb;border-radius:8px;padding:12px;border:1px solid #e5e7eb">${message}</pre>
          </div>
          <p style="margin-top:16px;color:#6b7280;font-size:12px">Sent ${new Date().toLocaleString()}</p>
        </td></tr>
      </table>`.trim(),
    })

    // ---- 2) Auto‑reply to the sender ----
    await resend.emails.send({
      from: CONTACT_FROM, // use onboarding@resend.dev until your domain is verified
      to: email,
      subject: 'Thanks for contacting embodiedpresence',
      text: userText, // fallback
      html: `
      <table style="width:100%;max-width:560px;margin:0 auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1f2937">
        <tr><td style="padding:16px 0">
          <h2 style="margin:0 0 8px;color:#111827">Thanks, ${name}!</h2>
          <p style="margin:0 0 8px;color:#4b5563">We’ve received your message and will respond within 1–2 business days.</p>
          <p style="margin:0 0 16px;color:#4b5563">If it’s urgent, call us at <strong>[your phone]</strong>.</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p style="margin:0 0 6px;color:#6b7280;font-size:12px">You submitted:</p>
          <div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px;background:#ffffff">
            <p><strong>Topic:</strong> ${topic || '—'}</p>
            <pre style="white-space:pre-wrap;font-family:inherit;background:#f9fafb;border-radius:8px;padding:12px;border:1px solid #e5e7eb">${message}</pre>
          </div>
          <p style="margin-top:16px;color:#6b7280;font-size:12px">— embodiedpresence</p>
        </td></tr>
      </table>`.trim(),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}