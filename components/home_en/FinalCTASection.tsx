'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="section-padding max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence into a local growth system? Start with a free audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/free-local-growth-audit" className="btn-primary text-lg">
              Get My Free Growth Audit
            </Link>
            <Link href="/en/packages" className="btn-secondary text-lg">
              See Packages
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
