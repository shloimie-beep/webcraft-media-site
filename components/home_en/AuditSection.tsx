'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

export default function AuditSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-gold/5 to-transparent">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Free Local Growth <span className="gradient-text">Audit</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              A comprehensive audit that works whether you have a website or not. We'll check what your customers see when they search for you — and what needs to be fixed.
            </p>
            <ul className="space-y-3 mb-8">
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
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-brand-gold">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/en/free-local-growth-audit" className="btn-primary">
                Get Free Audit
              </Link>
            </div>
          </AnimatedSection>
          <motion.div 
            className="bg-brand-dark border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Have a website?</h3>
            <p className="text-gray-400 mb-4">
              We'll show what is helping and what is losing leads. We'll check if your site is ready for ads, SEO, and AI Search.
            </p>
            <hr className="border-white/10 my-6" />
            <h3 className="text-xl font-bold text-white mb-4">No website yet?</h3>
            <p className="text-gray-400">
              We'll show what your customers currently see when they search for you — and what needs to be built to look professional and earn trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
