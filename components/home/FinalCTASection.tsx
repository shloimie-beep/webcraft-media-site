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
            בואו נבנה משהו <span className="gradient-text">יוצא דופן</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            מוכנים להפוך את הנוכחות הדיגיטלית שלכם למערכת צמיחה מקומית? התחילו עם בדיקה חינם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-local-growth-audit" className="btn-primary text-lg">
              קבלו בדיקת צמיחה חינם
            </Link>
            <Link href="/packages" className="btn-secondary text-lg">
              צפו בחבילות
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
