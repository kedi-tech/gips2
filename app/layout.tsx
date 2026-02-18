import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'GIPS - Guinea International Private Security',
  description: 'Entreprise de sécurité privée en Guinée. Protection des personnes, des biens et des sites stratégiques à travers la Guinée.',
  keywords: ['sécurité privée', 'Guinée', 'gardiennage', 'protection', 'GIPS', 'Kamsar', 'Conakry'],
}

export const viewport: Viewport = {
  themeColor: '#009460',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
