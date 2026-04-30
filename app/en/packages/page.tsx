import Link from 'next/link'
import { packages, setupFeeWording } from '@/config/site'

export const metadata = {
  title: 'Packages - WebCraft Media',
  description: 'Choose your growth plan. Small Business Growth System, Complete Local Lead System, or AI Voice Agent.',
}

export default function PackagesPageEn() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Growth Plan
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every bot is personally trained for your business — your services, your FAQs, your brand voice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl border ${pkg.popular ? 'border-brand-gold bg-gradient-to-b from-brand-gold/5 to-transparent' : 'border-white/10 bg-brand-dark'} p-8`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold text-white mb-2">{pkg.name.en}</h2>
                <div className="text-3xl font-bold gradient-text mb-2">{pkg.price.en}</div>
                <p className="text-sm text-gray-400 mb-6">{setupFeeWording.en}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.en.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-brand-teal mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/en/free-local-growth-audit" className={`block text-center w-full py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {pkg.cta.en}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Need a custom solution? <Link href="/en/contact" className="text-brand-teal hover:underline">Talk to us</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
