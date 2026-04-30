'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  {
    icon: '🤖',
    title: 'AI WhatsApp Bots',
    desc: 'Personally trained bots that know your business, answer questions, capture leads and book appointments — 24/6 in Hebrew & English.',
    link: '/en/packages',
    cta: 'Try Demo',
  },
  {
    icon: '📞',
    title: 'AI Voice Agents',
    desc: 'A custom-trained AI phone assistant that answers calls, handles FAQs, qualifies leads and books appointments — trained specifically on your services.',
    link: '/en/ai-voice-agent',
    cta: 'Try Voice Demo',
  },
  {
    icon: '🔍',
    title: 'SEO & GEO',
    desc: 'Traditional search engine optimization plus Generative Engine Optimization — get found on Google, ChatGPT, Perplexity and AI Overviews.',
    link: '/en/free-local-growth-audit',
    cta: 'Free Audit',
  },
  {
    icon: '📢',
    title: 'Ads & Social Media',
    desc: 'Google Ads, Facebook & Instagram campaigns, social media content creation and management that delivers ROI.',
    link: '/en/packages',
    cta: 'Get Started',
  },
  {
    icon: '⭐',
    title: 'Google Reviews Management',
    desc: 'Build and manage your online reputation with strategic review acquisition and monitoring.',
    link: '/en/google-review-trial',
    cta: 'Learn More',
  },
  {
    icon: '🌐',
    title: 'Websites & Landing Pages',
    desc: 'Stunning Hebrew/English websites and landing pages with full RTL support and conversion optimization.',
    link: '/en/packages',
    cta: 'Learn More',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Personally Trained AI Systems
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Digital solutions built for real businesses. Not generic templates — real AI, trained on your services, your brand voice, your FAQs.
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
