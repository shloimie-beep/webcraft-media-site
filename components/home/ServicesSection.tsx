'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  {
    icon: '🤖',
    title: 'בוטי וואטסאפ AI',
    desc: 'בוטים מאומנים אישית שמכירים את העסק שלך, עונים על שאלות, מלכדים לידים וקובעים פגישות — 24/6 בעברית ובאנגלית.',
    link: '/packages',
    cta: 'נסו הדגמה',
  },
  {
    icon: '📞',
    title: 'סוכני קול AI',
    desc: 'עוזר טלפוני AI מותאם אישית שעונה לשיחות, מטפל בשאלות נפוצות, מסנן לידים וקובע פגישות — מאומן ספציפית על השירותים שלך.',
    link: '/ai-voice-agent',
    cta: 'נסו קול AI',
  },
  {
    icon: '🔍',
    title: 'SEO & GEO',
    desc: 'אופטימיזציה למנועי חיפוש מסורתיים ואופטימיזציה למנועי יצירה — נמצאו ב-Google, ChatGPT, Perplexity וסקירות AI.',
    link: '/free-local-growth-audit',
    cta: 'ביקורת חינם',
  },
  {
    icon: '📢',
    title: 'פרסום & מדיה חברתית',
    desc: 'קמפיינים Google Ads, Facebook ו-Instagram, יצירת תוכן וניהול מדיה חברתית שמניב ROI.',
    link: '/packages',
    cta: 'התחילו',
  },
  {
    icon: '⭐',
    title: 'ניהול ביקורות Google',
    desc: 'בנו ונהלו את המוניטין המקוון שלכם עם איסוף אסטרטגי של ביקורות ומעקב.',
    link: '/google-review-trial',
    cta: 'למדו עוד',
  },
  {
    icon: '🌐',
    title: 'אתרים ודפי נחיתה',
    desc: 'אתרים ודפי נחיתה מרהיבים בעברית/אנגלית עם תמיכה מלאה ב-RTL ואופטימיזציה להמרה.',
    link: '/packages',
    cta: 'למדו עוד',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            מערכות AI מאומנות אישית
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            פתרונות דיגיטליים שנבנו לעסקים אמיתיים. לא תבניות גנריות — AI אמיתי, מאומן על השירותים שלך, הקול המותג שלך, השאלות הנפוצות שלך.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              className="bg-brand-dark border border-white/10 rounded-xl p-6 hover:border-brand-teal/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">{s.desc}</p>
              <Link href={s.link} className="text-brand-teal text-sm font-medium hover:text-brand-teal-light transition-colors inline-flex items-center gap-1">
                {s.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
