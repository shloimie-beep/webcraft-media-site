'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig, navLinks } from '@/config/site'
import HebrewLetters from './HebrewLetters'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="section-padding max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.he.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <HebrewLetters />
          <Link href="/en" className="text-sm text-gray-400 hover:text-brand-teal transition-colors">
            EN
          </Link>
          <Link
            href="/free-local-growth-audit"
            className="btn-primary text-sm py-2 px-4"
          >
            בדיקת צמיחה חינם
          </Link>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-darker border-t border-white/10">
          <nav className="section-padding py-4 flex flex-col gap-3">
            {navLinks.he.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/en" className="text-brand-teal py-2">English</Link>
            <Link href="/free-local-growth-audit" className="btn-primary text-center mt-2">
              בדיקת צמיחה חינם
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
