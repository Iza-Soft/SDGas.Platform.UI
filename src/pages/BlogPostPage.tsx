import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostBySlug, BLOG_POSTS } from '../data/blogPosts.ts'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './BlogPostPage.css'

const SITE_URL = 'https://sd-gas.co.uk'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined
  const body = useReveal<HTMLDivElement>('left')

  useDocumentMeta(post ? post.title : 'Blog', post ? post.excerpt : '', post ? `/blog/${post.slug}` : '/blog')

  if (!post) {
    return <Navigate to="/404" replace />
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'SD Gas' },
    publisher: { '@type': 'Organization', name: 'SD Gas' },
  }

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug)
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length]

  return (
    <>
      <Breadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: post.title }]} />
      <article className="blog-post container">
        <div className="section-heading">
          <h1>{post.title}</h1>
          <hr />
        </div>
        <p className="blog-post__meta">
          {formatDate(post.date)} · {post.readTime}
        </p>

        <div className="blog-post__image">
          <img src={post.image} alt={post.imageAlt} />
        </div>

        <div ref={body.ref} className={`blog-post__body ${body.className}`}>
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="blog-post__footer">
          <p>
            Have a job you'd like an honest opinion on? <Link to="/schedule">Request a call</Link> and we'll
            get back to you within one working day.
          </p>
          <Link className="blog-post__next" to={`/blog/${nextPost.slug}`}>
            Next: {nextPost.title} →
          </Link>
        </div>

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </article>
    </>
  )
}
