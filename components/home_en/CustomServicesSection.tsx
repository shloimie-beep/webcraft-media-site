'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

export default function CustomServicesSection() {
  const services = [
    'Custom Funnels',
    'CRM Workflows',
    'GoHighLevel Automations',
    'AI Agents',
    'Custom AI Bots',
    'Lead Follow-Up Systems',
    'Google Ads Campaigns',
    'SEO/GEO Systems',
    'Search Console Monitoring',
    'Review Automations',
    'Advanced Business Automations',
  ]

  return (
    <section className="py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Something More Custom?
          </h2>
          <p className="text-gray-400">
            WebCraft Media can also build custom solutions for specific needs:
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
          <Link href="/en/contact" className="btn-secondary">
            Talk to Us About a Custom Solution
          </Link>
        </div>
      </div>
    </section>
  )
}
