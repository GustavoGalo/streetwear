import type { Metadata } from 'next'
import { Inter, Oswald, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Streetwear VS Moda | TCC 2025',
  description: 'A moda que você veste tem origem. A gente veio pra te mostrar qual é! Um projeto de TCC sobre a história e cultura do streetwear.',
  keywords: ['streetwear', 'moda', 'cultura urbana', 'hip-hop', 'TCC', 'Sorocaba'],
  authors: [
    { name: 'Isabella Coimbra Galo' },
    { name: 'Maria Olivia de Lima' },
    { name: 'Livia Campos Lisboa' }
  ],
  openGraph: {
    title: 'Streetwear VS Moda | TCC 2025',
    description: 'A moda que você veste tem origem. A gente veio pra te mostrar qual é!',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
