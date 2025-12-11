import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Anchor Abroad',
  description: 'Created by Nazmun Nahar',
  generator: '',
  icons: {
    icon: [
      {
        url: '/placeholder-logo.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/placeholder-logo.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/placeholder-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/placeholder-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
