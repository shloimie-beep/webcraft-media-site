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
              בדיקת צמיחה מקומית <span className="gradient-text">חינם</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              בדיקה מקיפה שעובדת בין אם יש לכם אתר ובין אם לא. נבדוק מה הלקוחות שלכם רואים כשהם מחפשים אתכם — ומה צריך לשפר.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'בדיקת פרופיל Google Business',
                'בדיקת ביקורות ומוניטין',
                'בדיקת נראות SEO מקומי',
                'בדיקת נראות GEO / AI Search',
                'בדיקת "איך AI רואה את העסק שלך"',
                'בדיקת המרת אתר (אם יש)',
                'בדיקת הזדמנויות וואטסאפ ולכידת לידים',
                'בדיקת שיחות שלא נענו / סוכן קול',
                'השוואת מתחרים ואמון מקומי',
                'דוח פעולה מותאם אישית תוך 24-48 שעות',
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
              <Link href="/free-local-growth-audit" className="btn-primary">
                קבלו בדיקה חינם
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
            <h3 className="text-xl font-bold text-white mb-4">יש לכם אתר?</h3>
            <p className="text-gray-400 mb-4">
              נראה מה עוזר ומה מפסיד לידים. נבדוק אם האתר שלכם מוכן לפרסום, ל-SEO, ול-AI Search.
            </p>
            <hr className="border-white/10 my-6" />
            <h3 className="text-xl font-bold text-white mb-4">אין לכם אתר עדיין?</h3>
            <p className="text-gray-400">
              נראה מה הלקוחות שלכם רואים כשהם מחפשים אתכם — ומה צריך לבנות כדי להיראות מקצועיים ולזכות באמון.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}