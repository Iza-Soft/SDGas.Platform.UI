import express, { type Request, type Response, type NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import multer, { MulterError } from 'multer'
import { sendScheduleEmail, type ScheduleRequest } from './mailer.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000

const MAX_IMAGE_BYTES = 8 * 1024 * 1024 // 8MB — plenty for a phone photo, safely under typical email attachment limits

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_IMAGE_BYTES },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Attachment must be an image file'))
      return
    }
    cb(null, true)
  },
})

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ ok: true })
})

app.post('/api/schedule', upload.single('image'), async (req: Request, res: Response) => {
  const body = req.body ?? {}
  const { name, jobLocation, phone, suitableTime, jobType, email, message } = body

  const missing = (['name', 'jobLocation', 'phone', 'suitableTime', 'jobType'] as const).filter(
    (field) => !isNonEmptyString(body[field]),
  )

  if (missing.length > 0) {
    res.status(400).json({ ok: false, message: `Please fill in: ${missing.join(', ')}` })
    return
  }

  if (isNonEmptyString(email) && !EMAIL_PATTERN.test(email.trim())) {
    res.status(400).json({ ok: false, message: 'Please enter a valid email address.' })
    return
  }

  const data: ScheduleRequest = {
    name: String(name).trim().slice(0, 200),
    jobLocation: String(jobLocation).trim().slice(0, 300),
    phone: String(phone).trim().slice(0, 50),
    suitableTime: String(suitableTime).trim().slice(0, 300),
    jobType: String(jobType).trim().slice(0, 200),
    email: isNonEmptyString(email) ? email.trim().slice(0, 200) : undefined,
    message: isNonEmptyString(message) ? message.trim().slice(0, 2000) : undefined,
    attachment: req.file
      ? { filename: req.file.originalname.slice(0, 150), content: req.file.buffer, contentType: req.file.mimetype }
      : undefined,
  }

  try {
    await sendScheduleEmail(data)
    console.log(`[schedule] Request received from ${data.name} (${data.phone})`)
    res.json({ ok: true })
  } catch (err) {
    console.error('[schedule] Failed to send email:', err)
    res.status(502).json({ ok: false, message: 'Could not send your request right now.' })
  }
})

// Handles multer errors (oversized or non-image uploads) with a clean
// message instead of the default 500 crash page.
app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof MulterError) {
    const message =
      err.code === 'LIMIT_FILE_SIZE' ? 'That image is too large — please attach one under 8MB.' : err.message
    res.status(400).json({ ok: false, message })
    return
  }
  if (err instanceof Error && err.message === 'Attachment must be an image file') {
    res.status(400).json({ ok: false, message: err.message })
    return
  }
  next(err)
})

app.listen(PORT, () => {
  console.log(`SD Gas API listening on http://localhost:${PORT}`)
})
