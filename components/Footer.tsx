import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-white/10 mt-20">
      <div className="section-padding max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-3">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm max-w-md">
              אנו הופכים את האתר, הוואטסאפ, הטלפון, פרופיל Google, הביקורות והמעקב שלך למערכת צמיחה מקומית אחת מחוברת.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-teal transition-colors">
                {siteConfig.email}
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp.number.replace(/\+/g, '')}?text=${encodeURIComponent(siteConfig.whatsapp.prefilled.he)}`} className="hover:text-brand-teal transition-colors">
                WhatsApp: {siteConfig.whatsapp.number}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">ניווט</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">בית</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">חבילות</Link></li>
              <li><Link href="/free-local-growth-audit" className="hover:text-white transition-colors">בדיקת צמיחה חינם</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">בלוג</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">שירותים</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/ai-voice-agent" className="hover:text-white transition-colors">סוכן קול AI</Link></li>
              <li><Link href="/google-review-trial" className="hover:text-white transition-colors">ניסיון ביקורות Google</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">מערכת צמיחה לעסק קטן</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">מערכת לידים שלמה</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.name} - כל הזכויות שמורות</p>
          <div className="flex gap-4">
            <Link href="/en" className="hover:text-brand-teal transition-colors">English</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
