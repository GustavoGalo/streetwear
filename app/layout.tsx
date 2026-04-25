import type { Metadata } from 'next'
import { Oswald, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const blauerNue = localFont({
  src: [
    // Thin
    { path: '../public/fonts/blauer/BlauerNue-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-Thin_Italic.woff2', weight: '100', style: 'italic' },

    // ExtraLight
    { path: '../public/fonts/blauer/BlauerNue-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-ExtraLight_Italic.woff2', weight: '200', style: 'italic' },

    // Light
    { path: '../public/fonts/blauer/BlauerNue-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-Light_Italic.woff2', weight: '300', style: 'italic' },

    // Regular
    { path: '../public/fonts/blauer/BlauerNue-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-Regular_Italic.woff2', weight: '400', style: 'italic' },

    // Medium
    { path: '../public/fonts/blauer/BlauerNue-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-Medium_Italic.woff2', weight: '500', style: 'italic' },

    // SemiBold
    { path: '../public/fonts/blauer/BlauerNue-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-SemiBold_Italic.woff2', weight: '600', style: 'italic' },

    // Bold
    { path: '../public/fonts/blauer/BlauerNue-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-Bold_Italic.woff2', weight: '700', style: 'italic' },

    // ExtraBold
    { path: '../public/fonts/blauer/BlauerNue-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-ExtraBold_Italic.woff2', weight: '800', style: 'italic' },

    // Heavy
    { path: '../public/fonts/blauer/BlauerNue-Heavy.woff2', weight: '900', style: 'normal' },
    { path: '../public/fonts/blauer/BlauerNue-Heavy_Italic.woff2', weight: '900', style: 'italic' },
  ],
  variable: '--font-blauer',
  display: 'swap',
})

export const teenageDreams = localFont({
  src: [
    {
      path: '../public/fonts/TeenageDreamsFont.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-teenage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Streetwear VS Moda | TCC 2026',
  description: 'A moda que você veste tem origem. A gente veio pra te mostrar qual é! Um projeto de TCC sobre a história e cultura do streetwear.',
  keywords: ['streetwear', 'moda', 'cultura urbana', 'hip-hop', 'TCC', 'Sorocaba'],
  authors: [
    { name: 'Isabella Coimbra Galo' },
    { name: 'Maria Olivia de Lima' },
    { name: 'Livia Campos Lisboa' }
  ],
  openGraph: {
    title: 'Streetwear VS Moda | TCC 2026',
    description: 'A moda que você veste tem origem. A gente veio pra te mostrar qual é!',
    type: 'website',
  },
  icons: {
    icon: "icon.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${oswald.variable} ${jetbrainsMono.variable} ${blauerNue.variable} ${teenageDreams.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
