import type { Metadata } from 'next'
import { Inter, Heebo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const heebo = Heebo({ subsets: ['hebrew'], variable: '--font-heebo' })

export const metadata: Metadata = {
  title: `${siteConfig.name} - AI-Powered Local Growth Systems`,
  description: siteConfig.description.en,
  keywords: ['AI automation', 'WhatsApp bots', 'voice agents', 'SEO', 'GEO', 'local business', 'Israel', 'lead capture'],
  authors: [{ name: 'WebCraft Media' }],
  openGraph: {
    title: `${siteConfig.name} - AI-Powered Local Growth Systems`,
    description: siteConfig.description.en,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <body className="min-h-screen bg-brand-dark text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
