import type { SVGProps } from 'react'

// Small dependency-free icon set used across the Why Us badges and contact details.
const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

type IconProps = SVGProps<SVGSVGElement>

export const ShieldCheckIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3l7 3v6c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const BoltIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
)

export const HandshakeIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M2 11l4-3 4 2 3-2 3 1 4-2 2 3-3 6-3-1-3 2-4-1-4-2z" />
  </svg>
)

export const CoinIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 15.5c.6.7 1.5 1 2.5 1 1.8 0 3-.9 3-2.2 0-2.7-5-1.4-5-4 0-1.3 1.2-2.2 3-2.2 1 0 1.9.3 2.5 1" />
    <path d="M12 6.5v11" />
  </svg>
)

export const SirenIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M9 18v-6a3 3 0 0 1 6 0v6" />
    <path d="M6 18h12v2H6z" />
    <path d="M12 4v2" />
    <path d="M5 9l-1.5-1" />
    <path d="M19 9l1.5-1" />
  </svg>
)

export const DeviceIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8" />
    <path d="M12 16v4" />
  </svg>
)

export const StarIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3l2.6 5.8 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20l1.4-6.3-4.8-4.3 6.4-.6z" />
  </svg>
)

export const UmbrellaIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3v17a2.5 2.5 0 0 1-5 0" />
    <path d="M3 12a9 9 0 0 1 18 0z" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 4h4l1.5 4.5L8 10.5a12 12 0 0 0 5.5 5.5l1.5-2.5L19.5 15v4a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4 5.6 1.5 1.5 0 0 1 5 4z" />
  </svg>
)

export const PinIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const DocumentIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v4h4" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
)

export const ClockIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

export const FacebookIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M15 8.5h2V5.6c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.83-4.92 5.2v2.7H6.2v3.3h2.93V21h3.4v-4.35h2.82l.45-3.3h-3.27v-2.36c0-.95.26-1.6 1.62-1.6z" />
  </svg>
)

export const QuoteIcon = (props: IconProps) => (
  <svg {...base} {...props} strokeWidth={0} fill="currentColor">
    <path d="M9.5 6C6.5 7.2 5 9.6 5 13c0 2.8 1.6 4.5 3.7 4.5 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.7-2.6-2.7-.3 0-.5 0-.7.1.2-2 1.6-3.3 3.4-4l-2.3-2Zm9 0C15.5 7.2 14 9.6 14 13c0 2.8 1.6 4.5 3.7 4.5 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.7-2.6-2.7-.3 0-.5 0-.7.1.2-2 1.6-3.3 3.4-4l-2.3-2Z" />
  </svg>
)
