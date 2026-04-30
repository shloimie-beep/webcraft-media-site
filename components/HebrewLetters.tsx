'use client'

import { motion } from 'framer-motion'

export default function HebrewLetters() {
  const letters = ['א', 'ב', 'ס', 'ד']
  
  return (
    <div className="hidden md:flex items-center gap-1 mr-4" aria-hidden="true">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="text-lg font-bold gradient-text inline-block"
          animate={{
            y: [0, -4, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}
