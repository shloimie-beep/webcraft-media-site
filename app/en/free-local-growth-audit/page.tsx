import Link from 'next/link'

export const metadata = {
  title: 'Free Local Growth Audit - WebCraft Media',
  description: 'Comprehensive audit of your digital presence. Google Business, reviews, SEO, GEO, website, WhatsApp, and more. Report within 24-48 hours.',
}

export default function AuditPageEn() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Free Local Growth <span className="gradient-text">Audit</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Whether you have a website or not — we'll check what your customers see when they search for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Have a website?</h3>
              <p className="text-gray-400 mb-4">
                We'll show what is helping and what is losing leads. We'll check if your site is ready for ads, SEO, and AI Search.
              </p>
            </div>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">No website yet?</h3>
              <p className="text-gray-400 mb-4">
                We'll show what your customers currently see when they search for you — and what needs to be built to look professional.
              </p>
            </div>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">What's Included?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Google Business Profile review',
                'Reviews & reputation gap analysis',
                'Local SEO visibility check',
                'GEO / AI search visibility check',
                '"How AI sees your business" review',
                'Website conversion review (if you have one)',
                'WhatsApp & lead capture opportunities',
                'AI voice / missed-call opportunities',
                'Competitor / local trust comparison',
                'Personalized action report within 24-48 hours',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-brand-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 bg-gradient-to-r from-brand-gold/5 to-brand-teal/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Request Free Audit</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="text" placeholder="Business Name" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone / WhatsApp" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="email" placeholder="Email" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Business Category" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="text" placeholder="City / Area in Israel" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <input type="url" placeholder="Website URL (optional)" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <input type="url" placeholder="Google Business Profile link (optional)" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <select className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-gray-500 focus:border-brand-gold focus:outline-none">
                <option value="">Main Problem — Select</option>
                <option value="calls">Missed calls</option>
                <option value="whatsapp">Unanswered WhatsApp</option>
                <option value="reviews">Not enough reviews</option>
                <option value="google">Google visibility</option>
                <option value="website">No website / old site</option>
                <option value="ads">Wasting ad money</option>
                <option value="followup">No lead follow-up</option>
              </select>
              <textarea placeholder="Message (optional)" rows={4} className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <button type="submit" className="btn-primary w-full text-lg">
                Submit Free Audit Request
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              We'll get back to you within 24-48 hours with a personalized report.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
