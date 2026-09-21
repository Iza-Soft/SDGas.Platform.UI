import { useState, useRef, useEffect } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVICES } from '../data/services.ts'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import './SchedulePage.css'

const OTHER_JOB_TYPE = 'Other'
const JOB_TYPE_OPTIONS = [...SERVICES.map((service) => service.title), OTHER_JOB_TYPE]
const MAX_IMAGE_BYTES = 8 * 1024 * 1024

interface FormState {
  name: string
  email: string
  jobLocation: string
  phone: string
  suitableTime: string
  jobType: string
  otherJobType: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  jobLocation: '',
  phone: '',
  suitableTime: '',
  jobType: '',
  otherJobType: '',
  message: '',
}

type Status = 'idle' | 'submitting' | 'error'

const TEXT_FIELDS: {
  key: keyof FormState
  label: string
  placeholder: string
  type: string
  inputMode?: 'numeric'
  optional?: boolean
}[] = [
  { key: 'name', label: 'Full Name', placeholder: 'e.g. John Smith', type: 'text' },
  {
    key: 'email',
    label: 'Email',
    placeholder: 'e.g. john@example.com',
    type: 'email',
    optional: true,
  },
  { key: 'phone', label: 'Phone Number', placeholder: 'e.g. 07480 969210', type: 'tel', inputMode: 'numeric' },
  {
    key: 'jobLocation',
    label: 'Job Site Address',
    placeholder: 'Where does the work need to be carried out?',
    type: 'text',
  },
  {
    key: 'suitableTime',
    label: 'Suitable Time',
    placeholder: 'e.g. Weekday mornings, or a specific date and time',
    type: 'text',
  },
]

export default function SchedulePage() {
  useDocumentMeta(
    'Request a Call',
    'Request a callback from SD Gas — tell us about the job and the best time to reach you, and a Gas Safe registered engineer will call you back.',
    '/schedule',
  )

  const [form, setForm] = useState<FormState>(initialState)
  const [image, setImage] = useState<File | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const reveal = useReveal<HTMLElement>('left')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!image) {
      setImagePreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(image)
    setImagePreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [image])

  function handleChange(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = field === 'phone' ? e.target.value.replace(/\D/g, '') : e.target.value
      setForm((prev) => ({ ...prev, [field]: value }))
    }
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    if (file && file.size > MAX_IMAGE_BYTES) {
      setErrorMessage('That image is too large — please attach one under 8MB.')
      setStatus('error')
      if (fileInputRef.current) fileInputRef.current.value = ''
      setImage(null)
      return
    }
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
    setImage(file)
  }

  function removeImage() {
    setImage(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const jobType = form.jobType === OTHER_JOB_TYPE ? form.otherJobType.trim() : form.jobType

    const body = new FormData()
    body.set('name', form.name)
    body.set('jobLocation', form.jobLocation)
    body.set('phone', form.phone)
    body.set('suitableTime', form.suitableTime)
    body.set('jobType', jobType)
    if (form.email.trim()) body.set('email', form.email.trim())
    if (form.message.trim()) body.set('message', form.message.trim())
    if (image) body.set('image', image)

    try {
      const res = await fetch('/api/schedule', { method: 'POST', body })
      const data: { ok: boolean; message?: string } = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.message || 'Something went wrong sending your request.')
      }

      navigate('/thank-you')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong sending your request.')
    }
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Request a Call' }]} />
      <section ref={reveal.ref} className={`schedule container ${reveal.className}`}>
        <div className="section-heading">
          <h1>Request a Call</h1>
          <hr />
        </div>
        <p className="schedule__intro">
          Tell us a little about the job and the best time to reach you, and one of our Gas Safe registered
          engineers will call you back to confirm an appointment. For anything urgent, it's still quickest to
          call us directly.
        </p>
        <p className="schedule__promise">We aim to respond to every enquiry within one working day.</p>

        <form className="schedule__form" onSubmit={handleSubmit} noValidate>
          <label className="schedule__field">
            Type of Job
            <select required value={form.jobType} onChange={handleChange('jobType')}>
              <option value="" disabled>
                Choose the type of job
              </option>
              {JOB_TYPE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          {form.jobType === OTHER_JOB_TYPE && (
            <label className="schedule__field">
              Tell us about the job
              <input
                required
                type="text"
                value={form.otherJobType}
                onChange={handleChange('otherJobType')}
                placeholder="Briefly describe what you need done"
              />
            </label>
          )}

          {TEXT_FIELDS.map((field) => (
            <label className="schedule__field" key={field.key}>
              {field.label}
              {field.optional && <span className="schedule__optional"> (optional)</span>}
              <input
                required={!field.optional}
                type={field.type}
                inputMode={field.inputMode}
                value={form[field.key]}
                onChange={handleChange(field.key)}
                placeholder={field.placeholder}
              />
            </label>
          ))}

          <label className="schedule__field">
            Message
            <span className="schedule__optional"> (optional)</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={handleChange('message')}
              placeholder="Any extra detail that would help us — what's wrong, what you've noticed, anything at all"
            />
          </label>

          <label className="schedule__field">
            Attach a photo
            <span className="schedule__optional"> (optional)</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="schedule__file-input"
            />
          </label>

          {image && imagePreviewUrl && (
            <div className="schedule__image-preview">
              <img src={imagePreviewUrl} alt="Selected attachment preview" />
              <div>
                <span className="schedule__image-name">{image.name}</span>
                <button type="button" className="schedule__image-remove" onClick={removeImage}>
                  Remove
                </button>
              </div>
            </div>
          )}

          {status === 'error' && (
            <p className="schedule__error">
              {errorMessage} Please call us directly on <a href="tel:07480969210">07480 969210</a>.
            </p>
          )}

          <button className="btn btn--orange" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request a Callback'}
          </button>
        </form>
      </section>
    </>
  )
}
