'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

const faqs = [
  {
    q: 'האם הבוטים באמת מאומנים על העסק שלי?',
    a: 'כן. כל בוט מאומן על השירותים, המחירים, שעות העבודה, השאלות הנפוצות והסגנון שלך. אנחנו לא משתמשים בתבניות גנריות.',
  },
  {
    q: 'האם אני צריך אתר קיים כדי להתחיל?',
    a: 'לא. המערכת שלנו כוללת בניית אתר או דף נחיתה פרימיום. אם כבר יש לך אתר טוב, נשתמש בו ונשפר אותו במקום לבנות מההתחלה.',
  },
  {
    q: 'כמה זמן לוקח להקים את המערכת?',
    a: 'בדרך כלל 2-4 שבועות, תלוי במורכבות. הבדיקה החינם נותנת לך דוח תוך 24-48 שעות.',
  },
  {
    q: 'האם הבוט עובד בעברית ובאנגלית?',
    a: 'כן. כל המערכות שלנו דו-לשוניות. הלקוחות יכולים לכתוב או לדבר בשפה שהם מעדיפים.',
  },
  {
    q: 'מה קורה אם הבוט לא יודע לענות על משהו?',
    a: 'הבוט מעביר את השיחה לבן אדם בצורה חלקה, עם כל ההקשר והפרטים שכבר נאספו. אתה לא מפסיד לידים.',
  },
  {
    q: 'האם יש דמי הגדרה?',
    a: 'ייתכן שיחול דמי הגדרה. הנחות הגדרה מוגבלות בזמן עשויות להיות זמינות לאחר הביקורת החינם שלך.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-brand-darker/50" id="faq">
      <div className="section-padding max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            שאלות נפוצות
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              className="bg-brand-dark border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-right hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <motion.span 
                  className="text-brand-gold text-xl"
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open === i ? '−' : '+'}
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    className="px-5 pb-5 text-gray-400 text-sm leading-relaxed"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
