'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ReviewTrialSection() {
  return (
    <section className="py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div 
          className="bg-gradient-to-r from-brand-teal/10 to-brand-gold/10 border border-white/10 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-brand-teal text-sm font-semibold uppercase tracking-wide">Secondary Offer</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                14-Day Google Review Growth Trial
              </h2>
              <p className="text-gray-400 mb-6">
                Not ready for the full system yet? Start with a 14-day Google Review Growth Trial. Connect your Google Business Profile and try a review campaign.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Note: This does not mean the full WebCraft system is free. It is an entry point to start building trust.
              </p>
              <Link href="/en/google-review-trial" className="btn-secondary">
                Start Review Trial
              </Link>
            </div>
            <motion.div 
              className="flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-8xl">⭐</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
