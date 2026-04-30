'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

const testimonials = [
  {
    name: 'לקוח מרוצה',
    role: 'בעל עסק',
    text: 'שלמה היה מצוין לעבוד איתו, הוא באמת הבין את העסק שלי. אני בהחלט ממליץ על השירותים שלו.',
  },
  {
    name: 'לקוח מרוצה',
    role: 'בעל עסק',
    text: 'לעבוד עם שloimie היה תענוג, הוא באמת עזר לעסק שלי לצמוח ולשגשג... מומלץ מאוד, חמישה כוכבים!',
  },
  {
    name: 'לקוח מרוצה',
    role: 'בעל עסק',
    text: 'שלומי עובד קשה עם מוסר עבודה מעולה. הוא ישר ותענוג לעבוד איתו.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-darker/50">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ביקורות אמיתיות. לקוחות אמיתיים.
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className="bg-brand-dark border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <motion.span 
                    key={j} 
                    className="text-brand-gold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">"{t.text}"</p>
              <div className="text-sm">
                <span className="text-white font-medium">{t.name}</span>
                <span className="text-gray-500"> — {t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
