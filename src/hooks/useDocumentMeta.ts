import { useEffect } from 'react'

const SITE_NAME = 'SD Gas'
const BASE_URL = 'https://sd-gas.co.uk'

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(path: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', `${BASE_URL}${path}`)
}

/**
 * Sets a unique, descriptive <title> and meta description for the current
 * page. Search engines execute JS and pick these up at crawl time, so this
 * covers real SEO — the static tags in index.html (Open Graph/Twitter
 * card) stay fixed at the site level since social-media link scrapers
 * don't run JavaScript and would never see a per-page update anyway.
 *
 * Pass `noindex: true` for pages that shouldn't appear in search results
 * (the thank-you page, the 404 page) — otherwise they can get indexed and
 * show up as confusing/duplicate results.
 */
export function useDocumentMeta(
  title: string,
  description: string,
  path: string,
  options?: { noindex?: boolean },
) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
    document.title = fullTitle
    setMetaTag('description', description)
    setCanonical(path)
    setMetaTag('robots', options?.noindex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, path, options?.noindex])
}
