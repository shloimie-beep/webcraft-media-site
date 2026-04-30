import Link from 'next/link'
import { blogPosts } from '@/content/blog/posts'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.title.he} - WebCraft Media Blog`,
    description: post.excerpt.he,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div className="pt-20">
      <article className="py-20">
        <div className="section-padding max-w-3xl mx-auto">
          <Link href="/blog" className="text-brand-teal text-sm mb-6 inline-block hover:underline">
            ← חזרה לבלוג
          </Link>
          <span className="text-brand-teal text-sm font-medium">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {post.title.he}
          </h1>
          <p className="text-gray-500 text-sm mb-8">{post.date}</p>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p className="text-xl text-gray-400 mb-8">{post.excerpt.he}</p>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-8 text-center">
              <p className="text-gray-400 mb-4">פוסט מלא בקרוב. רוצים לדבר על הנושא הזה?</p>
              <Link href="/free-local-growth-audit" className="btn-primary">
                קבלו בדיקת צמיחה חינם
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
