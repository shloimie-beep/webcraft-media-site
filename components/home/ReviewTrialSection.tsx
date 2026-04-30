'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

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
              <span className="text-brand-teal text-sm font-semibold uppercase tracking-wide">הצעה משנית</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                ניסיון צמיחת ביקורות Google — 14 יום
              </h2>
              <p className="text-gray-400 mb-6">
                עדיין לא מוכנים למערכה המלאה? התחילו עם ניסיון של 14 יום לצמיחת ביקורות Google. חברו את פרופיל Google Business שלכם ונסו מסע ביקורות.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                שימו לב: זה לא אומר שהמערכת המלאה של WebCraft חינם. זו נקודת כניסה כדי להתחיל לבנות אמון.
              </p>
              <Link href="/google-review-trial" className="btn-secondary">
                התחילו ניסיון ביקורות
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