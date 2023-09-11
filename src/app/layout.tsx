import AuthProvider from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { inter } from '@/app/fonts/fonts'
import Header from '@/components/Header/Header'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'mAI-Cover',
  description: 'Tu carta de presentación en segundos gracias a nuestra IA',
  openGraph: {
    title: 'mAI-Cover',
    description:
      'Cartas de presentación, de recomendación, descripciones, evaluaciones... Apóyate en la IA para generar todo lo que HR necesita',
    url: 'https://mai-cover.com',
    siteName: 'mAI-Cover',
    images: [
      {
        url: 'https://mai-cover.com/contact_robot.png',
        width: 500,
        height: 500,
      },
    ],
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
