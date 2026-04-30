'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

const faqs = [
  {
    q: 'Are the bots really trained on my business?',
    a: 'Yes. Every bot is trained on your services, prices, hours, FAQs, and style. We do not use generic templates.',
  },
  {
    q: 'Do I need an existing website to start?',
    a: 'No. Our system includes building a premium website or landing page. If you already have a good site, we will use and improve it.',
  },
  {
    q: 'How long does setup take?',
    a: 'Usually 2-4 weeks depending on complexity. The free audit gives you a report within 24-48 hours.',
  },
  {
    q: 'Does the bot work in Hebrew and English?',
    a: 'Yes. All our systems are bilingual. Customers can write or speak in the language they prefer.',
  },
  {
    q: 'What if the bot cannot answer something?',
    a: 'The bot smoothly hands off the conversation to a human with all context already collected. You do not lose leads.',
  },
  {
    q: 'Are there setup fees?',
    a: 'Setup fee may apply. Limited-time setup discounts may be available after your free audit.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-brand-darker/50" id="faq">
      <div className="section-padding max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
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
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
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
