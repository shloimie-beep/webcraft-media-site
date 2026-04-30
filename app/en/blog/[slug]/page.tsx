import Link from 'next/link'
import { blogPosts } from '@/content/blog/posts'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.title.en} - WebCraft Media Blog`,
    description: post.excerpt.en,
  }
}

export default function BlogPostPageEn({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div className="pt-20">
      <article className="py-20">
        <div className="section-padding max-w-3xl mx-auto">
          <Link href="/en/blog" className="text-brand-teal text-sm mb-6 inline-block hover:underline">
            ← Back to Blog
          </Link>
          <span className="text-brand-teal text-sm font-medium">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {post.title.en}
          </h1>
          <p className="text-gray-500 text-sm mb-8">{post.date}</p>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p className="text-xl text-gray-400 mb-8">{post.excerpt.en}</p>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-8 text-center">
              <p className="text-gray-400 mb-4">Full post coming soon. Want to talk about this topic?</p>
              <Link href="/en/free-local-growth-audit" className="btn-primary">
                Get Free Growth Audit
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
