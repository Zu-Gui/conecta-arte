import { Analytics } from '@vercel/analytics/next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Conecta Arte — IFSP Campus Catanduva',
  description: 'Projeto de extensão universitária aproximando artistas locais de Catanduva e a comunidade.',
  icons: {
    icon: '/icone-site.png',
    apple: '/icone-site.png',
    shortcut: '/icone-site.png'
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#390099',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
