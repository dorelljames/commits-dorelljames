import clsx from 'clsx'
import { type Metadata } from 'next'
import { Outfit } from 'next/font/google'
import localFont from 'next/font/local'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

// Add JetBrains Mono font for our code styling
const jetbrainsMono = localFont({
  src: [
    {
      path: '../fonts/JetBrainsMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/JetBrainsMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Dorell James - Full Stack Developer',
  description:
    "Welcome to my digital workspace. This is where I document my experiences with all the stuff I'm working on - from scratching my own itch, to coding and building stuff.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        outfit.variable,
        monaSans.variable,
        jetbrainsMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="dark flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
