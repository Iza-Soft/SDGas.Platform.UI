import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogPosts.ts'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'
import './BlogPage.css'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  useDocumentMeta(
    'Blog',
    'Practical advice on boilers, heating, and gas safety from SD Gas, a Gas Safe registered engineer covering Fife.',
    '/blog',
  )
  const grid = useReveal<HTMLDivElement>()
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <div className="blog-page container">
        <div className="section-heading">
          <h1>Blog</h1>
          <hr />
        </div>
        <p className="blog-page__intro">
          Practical, plain-English advice on boilers, heating, and gas safety — written by a Gas Safe
          registered engineer.
        </p>

        <div ref={grid.ref} className={`blog-page__grid reveal-stagger${grid.isVisible ? ' is-visible' : ''}`}>
          {posts.map((post) => (
            <Link className="blog-card hover-lift" to={`/blog/${post.slug}`} key={post.slug}>
              <div className="blog-card__image">
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__meta">
                  {formatDate(post.date)} · {post.readTime}
                </span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-card__read-more">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
