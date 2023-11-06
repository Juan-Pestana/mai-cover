import AuthProvider from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { inter } from '@/app/fonts/fonts'
import Header from '@/components/Header/Header'
import { Toaster } from '@/components/ui/toaster'
import { nextUrl } from '@/lib/url'
import PlausibleProvider from 'next-plausible'

export const metadata: Metadata = {
  metadataBase: new URL(nextUrl),
  robots: {
    'max-image-preview': 'large',
    follow: true,
    index: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  title: 'mAI-Cover',
  description:
    'La IA que te apoya en tu búsqueda de empleo y el feedaback a tu equipo',
  keywords: ['Empleo', 'IA', 'Recomendación', 'Feedback', 'Recursos Humanos'],
  openGraph: {
    title: 'mAI-Cover',
    description: 'La IA que te apoya en tu búsqueda de empleo.',
    url: 'https://www.mai-cover.com',
    siteName: 'mAI-Cover',
  },
  twitter: {
    title: 'mAI-Cover',
    description: 'La IA que te apoya en tu búsqueda de empleo.',
    card: 'summary_large_image',
    creator: '@PestanaDev',
    site: '@mAIcover',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-ES">
      <head>
        <PlausibleProvider domain="mai-cover.com" />
      </head>
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
