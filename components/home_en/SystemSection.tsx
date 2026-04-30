'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

export default function SystemSection() {
  const steps = [
    { num: '01', title: 'Get Found', desc: 'Google Business Profile optimization and local visibility' },
    { num: '02', title: 'Get Trusted', desc: 'Professional website and real reviews that build trust' },
    { num: '03', title: 'Get Contacted', desc: 'Customers find you on every possible channel' },
    { num: '04', title: 'Get Answered', desc: 'AI WhatsApp bot and voice agent answer 24/6' },
    { num: '05', title: 'Get Followed Up', desc: 'Automatic lead follow-up system' },
    { num: '06', title: 'Get Reviewed', desc: 'Automatic campaign for positive reviews' },
    { num: '07', title: 'Get Booked', desc: 'Customers book appointments automatically in your calendar' },
  ]

  return (
    <section className="py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Connected Local Growth System
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Not just a website. A complete digital system connecting all your customer touchpoints.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-gradient-to-b from-brand-gold/10 to-brand-teal/10 border border-white/10 rounded-xl p-5 h-full hover:border-brand-gold/40 transition-all">
                <span className="text-brand-gold font-bold text-lg">{step.num}</span>
                <h3 className="font-semibold text-white mt-2 mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/en/free-local-growth-audit" className="btn-primary">
            Get My Free Local Growth Audit
          </Link>
        </div>
      </div>
    </section>
  )
}
