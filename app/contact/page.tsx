import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'צור קשר - WebCraft Media',
  description: 'צרו קשר עם WebCraft Media. WhatsApp, אימייל, או בקשו בדיקת צמיחה מקומית חינם.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              בואו נדבר
            </h1>
            <p className="text-gray-400 text-lg">
              מוכנים להפוך את הנוכחות הדיגיטלית שלכם למערכת צמיחה? בואו נדבר.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-400 mb-4">הדרך המהירה ביותר לדבר איתנו</p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number.replace(/\+/g, '')}?text=${encodeURIComponent(siteConfig.whatsapp.prefilled.he)}`}
                className="btn-primary w-full text-center"
              >
                שלחו הודעת WhatsApp
              </a>
            </div>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">אימייל</h3>
              <p className="text-gray-400 mb-4">לשאלות מורכבות או הצעות עבודה</p>
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary w-full text-center">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">או שלחו הודעה ישירות</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="שם" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="email" placeholder="אימייל" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <input type="text" placeholder="נושא" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <textarea placeholder="הודעה" rows={5} className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <button type="submit" className="btn-primary w-full">שלחו הודעה</button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <Link href="/free-local-growth-audit" className="text-brand-gold hover:underline text-lg">
              או התחילו עם בדיקת צמיחה מקומית חינם →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
