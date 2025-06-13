// src/fonts/font.ts
import { Inter, Roboto, Open_Sans, Nunito_Sans, Noto_Sans } from 'next/font/google'

// Inter - Very similar to Helvetica Neue, modern and clean
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Roboto - Google's flagship font, similar proportions to Helvetica
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

// Open Sans - Humanist sans-serif, very readable
export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

// Nunito Sans - Modern, rounded alternative
export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

// Noto Sans - Humanist sans-serif, very readable
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

// Export the most Helvetica Neue-like font as default
export const primaryFont = inter