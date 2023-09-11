import AuthProvider from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { inter } from '@/app/fonts/fonts'
import Header from '@/components/Header/Header'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'mAI-Cover',
  description: 'Tu carta de presentación en segundos gracias a nuestra IA',
  keywords: ['Empleo', 'IA', 'cartas de recomendación', 'Feedback'],
  openGraph: {
    title: 'mAI-Cover',
    description: 'La IA que te apoya en tu búsqueda de empleo.',
    url: 'https://www.mai-cover.com',
    siteName: 'mAI-Cover',
  },
  twitter: {
    title: 'mAI-Cover',
    description: 'La IA que te apoya en tu búsqueda de empleo.',
    card: 'summary',
    creator: '@PestanaDev',
    site: 'https://www.mai-cover.com',
  },
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
