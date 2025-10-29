import Image from 'next/image'
import './globals.css'

export default function Page() {
  return (
    <main className="container">
      <header className="hero">
        <div className="hero-inner">
          <img src="/twitter-banner.png" alt="Warbase banner" className="banner" />
          <h1 className="title">$warbase</h1>
          <p className="subtitle">Warbase on Base.Meme</p>
        </div>
      </header>

      <section className="content">
        <p>
          Welcome to Warbase — a mutant bear meme token landing page. This template is converted to Next.js and includes Vercel Analytics.
        </p>
      </section>

      <footer className="footer">
        <p>Made with ♥ — Warbase</p>
      </footer>
    </main>
  )
}
