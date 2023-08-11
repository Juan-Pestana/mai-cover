import AuthProvider from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { inter } from '@/app/fonts/fonts'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'mAI-Cover',
  description: 'Tu carta de presentación en segundos gracias a nuestra IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <AuthProvider>
        <body
          className={`${inter.className} relative flex flex-col h-[100dvh]`}
        >
          <Header />
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  )
}
