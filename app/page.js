import Image from 'next/image'

export default function Home() {
  return (
    <main className="main-wrap">
      <div className="bg-bear">
        <img src="/bear.png" alt="bear" style={width: '90%', maxWidth: 1200} />
      </div>

      <div className="hero-card fade-in">
        <div className="flex items-center justify-between w-full mb-8">
          <div className="text-left text-white font-bold">$warbase</div>
          <div className="hidden md:block"></div>
        </div>

        <h1 className="title">$warbase</h1>
        <p className="subtitle">Warbase on Base.Meme</p>
        <a className="buy-btn" href="https://base.meme/coin/base:0x92Cc3f9C7cF7cc2593EF85f9EA0F561C6F9e8888" target="_blank" rel="noreferrer">
          Buy on Base.Meme
        </a>
      </div>
    </main>
  )
}
