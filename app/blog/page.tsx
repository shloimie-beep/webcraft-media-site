import Link from 'next/link'
import { blogPosts } from '@/content/blog/posts'

export const metadata = {
  title: 'בלוג - WebCraft Media',
  description: 'תוכן מעשי לעסקים קטנים: AI, אוטומציה, SEO, GEO, ביקורות, WhatsApp וצמיחה מקומית.',
}

export default function BlogIndexPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              בלוג
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              תוכן מעשי לעסקים קטנים — AI, אוטומציה, SEO, GEO, ביקורות, WhatsApp וצמיחה מקומית.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-brand-dark border border-white/10 rounded-xl p-6 hover:border-brand-teal/40 transition-all group"
              >
                <span className="text-brand-teal text-sm font-medium">{post.category}</span>
                <h2 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-brand-gold transition-colors">
                  {post.title.he}
                </h2>
                <p className="text-sm text-gray-400 mb-4">{post.excerpt.he}</p>
                <span className="text-xs text-gray-500">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
