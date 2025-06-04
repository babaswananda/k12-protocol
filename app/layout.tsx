import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AIVoiceAgent } from '@/components/AIVoiceAgent'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '.K-12 Portal - AI-Native Education Infrastructure',
  description: 'The official AI-native protocol for public education. Secure your school\'s .K-12 domain and unlock AI-integrated tools, student identity, and district-wide intelligence.',
  keywords: 'K-12, education, AI, protocol, school districts, student identity, educational technology',
  authors: [{ name: '.K-12 Protocol Team' }],
  openGraph: {
    title: '.K-12 Portal - AI-Native Education Infrastructure',
    description: 'The future of public education has a handle. Secure your school\'s official .K-12 domain.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '.K-12 Portal - AI-Native Education Infrastructure',
    description: 'The future of public education has a handle.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <AIVoiceAgent />
        <ScrollToTop />
      </body>
    </html>
  )
}
