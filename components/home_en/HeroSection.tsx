'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-teal/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
      
      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white">AI Automation</span>
            <span className="block gradient-text">Built Specifically for Your Business</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Personally trained WhatsApp bots, voice agents, SEO & GEO, and lead capture systems — bilingual in Hebrew & English. Not generic tools. Real AI, trained on your services.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/en/free-local-growth-audit" className="btn-primary text-lg">
              Get My Free Local Growth Audit
            </Link>
            <Link href="/en/packages" className="btn-secondary text-lg">
              See Packages
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
