import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { EB_Garamond } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const garamont = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamont',
})
