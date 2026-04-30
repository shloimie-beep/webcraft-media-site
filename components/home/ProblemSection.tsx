'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

export default function ProblemSection() {
  const problems = [
    { icon: '📞', title: 'שיחות שלא נענו', desc: 'לקוחות מתקשרים ואף אחד לא עונה' },
    { icon: '💬', title: 'הודעות וואטסאפ ללא מענה', desc: 'לקוחות כותבים ולא מקבלים תשובה בזמן' },
    { icon: '🔍', title: 'פרופיל Google חלש', desc: 'לא נראים בתוצאות החיפוש המקומיות' },
    { icon: '⭐', title: 'חסרים ביקורות', desc: 'לקוחות מרוצים אבל לא כותבים ביקורות' },
    { icon: '🌐', title: 'אין אתר / אתר ישן', desc: 'נראים פחות מקצועיים מהמתחרים' },
    { icon: '💸', title: 'בזבון כסף על פרסום', desc: 'שולחים קליקים לדפים חלשים שמפסידים לידים' },
    { icon: '📋', title: 'אין מעקב', desc: 'לידים נופלים בין הכיסאות אחרי הפנייה הראשונה' },
    { icon: '🤖', title: 'לא מוכנים ל-AI Search', desc: 'ChatGPT ו-Gemini לא ממליצים עליכם' },
  ]

  return (
    <section className="py-20 bg-brand-darker/50">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            הבעיות שמונעות מעסקים מקומיים לגדול
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            עסקים קטנים בישראל מסתמכים על המלצות מפה לאוזן, אבל האמון שלהם לא נראה באינטרנט
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div 
              key={i} 
              className="bg-brand-dark border border-white/10 rounded-xl p-6 hover:border-brand-gold/50 transition-colors cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(227, 166, 26, 0.5)' }}
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
