'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { packages, setupFeeWording } from '@/config/site'
import AnimatedSection from '@/components/AnimatedSection'

export default function PackagesSection() {
  return (
    <section className="py-20 bg-brand-darker/50" id="packages">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every bot is personally trained for your business — your services, your FAQs, your brand voice. No generic templates.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className={`relative rounded-2xl border ${pkg.popular ? 'border-brand-gold bg-gradient-to-b from-brand-gold/5 to-transparent' : 'border-white/10 bg-brand-dark'} p-8`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-sm font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name.en}</h3>
              <div className="text-3xl font-bold gradient-text mb-2">{pkg.price.en}</div>
              <p className="text-sm text-gray-400 mb-6">{setupFeeWording.en}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.en.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-brand-teal mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/en/free-local-growth-audit" className={`block text-center w-full py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {pkg.cta.en}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Need a custom solution? <Link href="/en/contact" className="text-brand-teal hover:underline">Talk to us</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
