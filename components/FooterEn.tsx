import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function FooterEn() {
  return (
    <footer className="bg-brand-darker border-t border-white/10 mt-20">
      <div className="section-padding max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-3">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm max-w-md">
              We turn your website, WhatsApp, phone, Google profile, reviews, and follow-up into one connected local growth system.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-teal transition-colors">
                {siteConfig.email}
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp.number.replace(/\+/g, '')}?text=${encodeURIComponent(siteConfig.whatsapp.prefilled.en)}`} className="hover:text-brand-teal transition-colors">
                WhatsApp: {siteConfig.whatsapp.number}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/en" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/en/packages" className="hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/en/free-local-growth-audit" className="hover:text-white transition-colors">Free Audit</Link></li>
              <li><Link href="/en/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/en/ai-voice-agent" className="hover:text-white transition-colors">AI Voice Agent</Link></li>
              <li><Link href="/en/google-review-trial" className="hover:text-white transition-colors">Google Review Trial</Link></li>
              <li><Link href="/en/packages" className="hover:text-white transition-colors">Small Business Growth</Link></li>
              <li><Link href="/en/packages" className="hover:text-white transition-colors">Complete Lead System</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.name} - All Rights Reserved</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-brand-teal transition-colors">Hebrew</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
