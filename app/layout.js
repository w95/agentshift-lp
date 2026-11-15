import { Archivo_Black, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/data/site'
import './globals.css'

const display = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const body = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const DESCRIPTION =
  'The enterprise platform for building AI agents that survive production. Evaluation, private deployment and a correction loop that makes agents better every run.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Agentshift — Reliable, private, self-learning AI agents',
    template: '%s — Agentshift',
  },
  description: DESCRIPTION,
  applicationName: 'Agentshift',
  keywords: [
    'AI agents',
    'agent infrastructure',
    'agent evaluation',
    'private deployment',
    'enterprise AI',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Agentshift',
    title: 'Agentshift — Reliable, private, self-learning AI agents',
    description: DESCRIPTION,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@agentshift',
    title: 'Agentshift — Reliable, private, self-learning AI agents',
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#fff8ec',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
