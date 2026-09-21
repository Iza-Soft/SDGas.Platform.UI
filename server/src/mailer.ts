import nodemailer, { type Transporter } from 'nodemailer'

export interface ScheduleAttachment {
  filename: string
  content: Buffer
  contentType: string
}

export interface ScheduleRequest {
  name: string
  jobLocation: string
  phone: string
  suitableTime: string
  jobType: string
  email?: string
  message?: string
  attachment?: ScheduleAttachment
}

const WORK_EMAIL = process.env.NOTIFY_EMAIL || 'ssdgasservices@gmail.com'

let cachedTransporter: Transporter | null = null
let usingTestAccount = false

async function getTransporter(): Promise<Transporter> {
  if (cachedTransporter) return cachedTransporter

  const { GMAIL_USER, GMAIL_APP_PASSWORD, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (GMAIL_USER && GMAIL_APP_PASSWORD) {
    cachedTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      // Some local antivirus "mail shield" tools (e.g. Avast) intercept
      // outbound SMTP and break certificate validation even when the
      // system's own CA store is trusted. This only relaxes verification
      // for this one Gmail SMTP connection, not the whole app.
      tls: { rejectUnauthorized: false },
    })
    return cachedTransporter
  }

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    const port = Number(SMTP_PORT ?? 587)
    cachedTransporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
    return cachedTransporter
  }

  // No real credentials configured — fall back to a free Ethereal test
  // inbox so the form still works end to end during development.
  usingTestAccount = true
  const testAccount = await nodemailer.createTestAccount()
  console.warn(
    '\n[mailer] No GMAIL_* or SMTP_* env vars set — using a temporary Ethereal test inbox.' +
      '\n[mailer] Emails will NOT reach ' +
      WORK_EMAIL +
      ' until you set real credentials in server/.env (see .env.example).' +
      `\n[mailer] Test inbox login: ${testAccount.user} / ${testAccount.pass}\n`,
  )
  cachedTransporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: { user: testAccount.user, pass: testAccount.pass },
  })
  return cachedTransporter
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendScheduleEmail(data: ScheduleRequest): Promise<void> {
  const transporter = await getTransporter()

  const textLines = [
    'New scheduling request from the website',
    '',
    `Type of job: ${data.jobType}`,
    `Name: ${data.name}`,
    `Job site: ${data.jobLocation}`,
    `Phone: ${data.phone}`,
    `Suitable time: ${data.suitableTime}`,
  ]
  const htmlRows = [
    `<tr><td><strong>Type of job</strong></td><td>${escapeHtml(data.jobType)}</td></tr>`,
    `<tr><td><strong>Name</strong></td><td>${escapeHtml(data.name)}</td></tr>`,
    `<tr><td><strong>Job site</strong></td><td>${escapeHtml(data.jobLocation)}</td></tr>`,
    `<tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>`,
    `<tr><td><strong>Suitable time</strong></td><td>${escapeHtml(data.suitableTime)}</td></tr>`,
  ]

  if (data.email) {
    textLines.push(`Email: ${data.email}`)
    htmlRows.push(`<tr><td><strong>Email</strong></td><td>${escapeHtml(data.email)}</td></tr>`)
  }
  if (data.message) {
    textLines.push('', `Message: ${data.message}`)
    htmlRows.push(`<tr><td><strong>Message</strong></td><td>${escapeHtml(data.message)}</td></tr>`)
  }
  if (data.attachment) {
    textLines.push('', '(A photo was attached to this request.)')
  }

  const info = await transporter.sendMail({
    from: '"SD Gas Website" <no-reply@sd-gas.co.uk>',
    to: WORK_EMAIL,
    replyTo: data.email || undefined,
    subject: `New job request from ${data.name}`,
    text: textLines.join('\n'),
    html: `
      <h2>New job request from the website</h2>
      <table cellpadding="6" cellspacing="0">
        ${htmlRows.join('\n')}
      </table>
    `,
    attachments: data.attachment
      ? [
          {
            filename: data.attachment.filename,
            content: data.attachment.content,
            contentType: data.attachment.contentType,
          },
        ]
      : undefined,
  })

  if (usingTestAccount) {
    console.log('[mailer] Test mode — preview the email here:', nodemailer.getTestMessageUrl(info))
  }
}
