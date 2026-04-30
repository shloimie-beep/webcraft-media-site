'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'
import AnimatedSection from '@/components/AnimatedSection'

export default function FoundersSection() {
  return (
    <section className="py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About WebCraft Media
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            WebCraft Media was founded to help small businesses harness the power of modern automation without the complexity that usually comes with it.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {siteConfig.founders.map((f, i) => (
            <motion.div 
              key={i} 
              className="bg-brand-dark border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-gold to-brand-teal flex items-center justify-center text-brand-dark font-bold text-lg">
                  {f.initials}
                </div>
                <div>
                  <h3 className="font-bold text-white">{f.name}</h3>
                  <p className="text-sm text-brand-teal">{f.role.en}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{f.bio.en}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-brand-gold/5 to-brand-teal/5 border border-white/10 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At WebCraft Media, the goal is simple: help businesses respond faster, work smarter, and grow with confidence by using the right combination of automation, AI, and modern web systems.
          </p>
          <p className="text-gray-500 text-sm mt-4">{siteConfig.address}</p>
        </motion.div>
      </div>
    </section>
  )
}
