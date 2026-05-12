import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IRONPRO FITNESS - Premium Sports Supplements',
  description: 'Modern premium e-commerce platform for sports supplements. Fast, minimalist, and optimized for conversion.',
  keywords: 'supplements, fitness, whey protein, creatine, sports nutrition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-dark text-text">
        {children}
      </body>
    </html>
  )
}
