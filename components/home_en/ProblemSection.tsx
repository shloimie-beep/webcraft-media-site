'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

export default function ProblemSection() {
  const problems = [
    { icon: '📞', title: 'Missed Calls', desc: 'Customers call and no one answers' },
    { icon: '💬', title: 'Unanswered WhatsApps', desc: 'Customers message and get no timely response' },
    { icon: '🔍', title: 'Weak Google Profile', desc: 'Not visible in local search results' },
    { icon: '⭐', title: 'Not Enough Reviews', desc: 'Happy customers but no reviews' },
    { icon: '🌐', title: 'No Website / Old Site', desc: 'Look less professional than competitors' },
    { icon: '💸', title: 'Wasted Ad Spend', desc: 'Sending clicks to weak pages that lose leads' },
    { icon: '📋', title: 'No Follow-Up', desc: 'Leads fall through after first contact' },
    { icon: '🤖', title: 'Not Ready for AI Search', desc: 'ChatGPT and Gemini do not recommend you' },
  ]

  return (
    <section className="py-20 bg-brand-darker/50">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Problems Stopping Local Businesses from Growing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Israeli small businesses rely on word of mouth, but their trust is not visible online
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
