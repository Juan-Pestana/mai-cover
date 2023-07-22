import AuthProvider from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { inter } from '@/app/fonts/fonts'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'mAI-cover',
  description: 'Tu carta de presentación en segundos gracias a la IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <AuthProvider>
        <body className={`${inter.className} relative`}>
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}
