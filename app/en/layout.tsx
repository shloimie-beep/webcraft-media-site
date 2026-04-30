import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/HeaderEn'
import Footer from '@/components/FooterEn'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: `${siteConfig.name} - AI-Powered Local Growth Systems`,
  description: siteConfig.description.en,
  keywords: ['AI automation', 'WhatsApp bots', 'voice agents', 'SEO', 'GEO', 'local business', 'Israel', 'lead capture'],
  authors: [{ name: 'WebCraft Media' }],
  openGraph: {
    title: `${siteConfig.name} - AI-Powered Local Growth Systems`,
    description: siteConfig.description.en,
    url: `${siteConfig.url}/en`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable}`}>
      <body className="min-h-screen bg-brand-dark text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
