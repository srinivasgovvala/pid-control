import nodemailer from 'nodemailer'

const rateLimitMap = new Map()

function getRateLimit(ip) {
  const now = Date.now()
  const windowMs = 60000
  const maxRequests = 3
  const entry = rateLimitMap.get(ip)
  if (!entry || now - entry.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }
  if (entry.count >= maxRequests) return true
  entry.count++
  return false
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (getRateLimit(ip)) {
      return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    const body = await request.json()
    const { name, company, email, phone, service, message, _hp } = body

    if (_hp) {
      return Response.json({ success: true })
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    if (name.trim().length > 200 || message.trim().length > 5000) {
      return Response.json({ error: 'Input too long.' }, { status: 400 })
    }

    const EMAIL_TO = process.env.EMAIL_TO || 'sales@pid-controls.com'
    const EMAIL_FROM = process.env.EMAIL_FROM

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    const useSmtp = smtpHost && smtpPort && smtpUser && smtpPass

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'long', timeStyle: 'short' })

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0B3D24, #123524); padding: 24px 32px;">
          <h2 style="color: #fff; margin: 0; font-size: 22px;">New Website Enquiry</h2>
        </div>
        <div style="padding: 32px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: 600; color: #0B3D24; width: 120px;">Name</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: 600; color: #0B3D24;">Company</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(company || 'N/A')}</td></tr>
            <tr><td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: 600; color: #0B3D24;">Email</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${escapeHtml(email)}" style="color: #4CAF50;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: 600; color: #0B3D24;">Phone</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(phone || 'N/A')}</td></tr>
            <tr><td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: 600; color: #0B3D24;">Service</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(service || 'Not specified')}</td></tr>
            <tr><td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: 600; color: #0B3D24; vertical-align: top;">Message</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee; color: #333; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
            <tr><td style="padding: 10px 8px; font-weight: 600; color: #0B3D24;">Submitted</td><td style="padding: 10px 8px; color: #888; font-size: 13px;">${timestamp}</td></tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 24px; text-align: center; border-top: 1px solid #eee; padding-top: 16px;">This enquiry was submitted via the PID Controls website contact form. Reply-To: ${escapeHtml(email)}</p>
        </div>
      </div>
    `

    const textBody = `New Website Enquiry\n\nName: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service || 'Not specified'}\nMessage:\n${message}\n\nSubmitted: ${timestamp}`

    if (useSmtp) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort, 10),
        secure: smtpPort === '465',
        auth: { user: smtpUser, pass: smtpPass },
      })

      await transporter.sendMail({
        from: `"PID Controls Website" <${EMAIL_FROM || smtpUser}>`,
        to: EMAIL_TO,
        replyTo: email,
        subject: `New Website Enquiry - ${name}`,
        html: htmlBody,
        text: textBody,
      })
    } else {
      console.log('--- CONTACT FORM SUBMISSION (SMTP not configured) ---')
      console.log('To:', EMAIL_TO)
      console.log('Reply-To:', email)
      console.log('Subject:', `New Website Enquiry - ${name}`)
      console.log('Body:', textBody)
      console.log('--- END ---')
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ error: 'We could not send your message right now. Please try again or contact us directly at sales@pid-controls.com.' }, { status: 500 })
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
