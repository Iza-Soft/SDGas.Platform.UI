import { Link } from 'react-router-dom'
import './Breadcrumbs.css'

const BASE_URL = 'https://sd-gas.co.uk'

export interface Crumb {
  label: string
  to?: string
}

/** Visual breadcrumb trail plus matching BreadcrumbList structured data for search engines. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: 'Home', to: '/home' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: crumb.to ? `${BASE_URL}${crumb.to === '/home' ? '/' : crumb.to}` : undefined,
    })),
  }

  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1
          return (
            <li key={crumb.label}>
              {!isLast && crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              {!isLast && <span className="breadcrumbs__sep">/</span>}
            </li>
          )
        })}
      </ol>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </nav>
  )
}
