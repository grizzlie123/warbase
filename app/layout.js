import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Warbase on Base.Meme',
  description: 'Warbase landing page with Vercel Analytics integrated',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
