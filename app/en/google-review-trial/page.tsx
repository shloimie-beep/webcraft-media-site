import Link from 'next/link'

export const metadata = {
  title: 'Google Review Trial - WebCraft Media',
  description: '14-day Google Review Growth Trial. Connect your Google Business Profile and try a review campaign.',
}

export default function ReviewTrialPageEn() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              14-Day <span className="gradient-text">Google Review Trial</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Not ready for the full system? Start with a 14-day Google Review Growth Trial.
            </p>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">What's Included?</h2>
            <ul className="space-y-3">
              {[
                'Connect your Google Business Profile',
                'Review request campaign setup',
                'Automated follow-up messages',
                'Review monitoring dashboard',
                '14-day trial period',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-brand-teal">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-brand-gold/5 to-brand-teal/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Start Your Trial</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="text" placeholder="Business Name" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <input type="email" placeholder="Email" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <input type="text" placeholder="Google Business Profile URL" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <button type="submit" className="btn-primary w-full text-lg">
                Start 14-Day Trial
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Note: This is a trial for review growth only. The full WebCraft system requires a paid plan.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/en/free-local-growth-audit" className="btn-secondary text-lg">
              Or Get Full Free Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
