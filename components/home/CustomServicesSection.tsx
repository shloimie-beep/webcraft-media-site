'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

export default function CustomServicesSection() {
  const services = [
    'משפכים מותאמים אישית',
    'CRM workflows',
    'אוטומציות GoHighLevel',
    'סוכני AI',
    'בוטי AI מותאמים',
    'מערכות מעקב לידים',
    'קמפיינים Google Ads',
    'מערכות SEO/GEO',
    'מעקב Search Console',
    'אוטומציות ביקורות',
    'אוטומציות עסקיות מתקדמות',
  ]

  return (
    <section className="py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            צריכים משהו מותאם יותר?
          </h2>
          <p className="text-gray-400">
            WebCraft Media יכולה גם לבנות פתרונות מותאמים אישית לצרכים ספציפיים:
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              className="bg-brand-dark border border-white/10 rounded-lg p-4 text-center text-sm text-gray-300 hover:border-brand-teal/40 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              {s}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/contact" className="btn-secondary">
            דברו איתנו על פתרון מותאם
          </Link>
        </div>
      </div>
    </section>
  )
}
