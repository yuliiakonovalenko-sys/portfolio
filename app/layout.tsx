import type { Metadata } from 'next'
import './globals.css'
import MouseBalls from '@/components/MouseBalls'
import ScrollAnimator from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  title: 'Yuliia Konovalenko — Brand & Product Designer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter+Tight:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-dark font-sans font-medium">
        <MouseBalls />
        <ScrollAnimator />
        {children}
      </body>
    </html>
  )
}
