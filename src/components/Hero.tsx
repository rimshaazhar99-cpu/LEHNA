import MandalaHero from './MandalaHero'

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero">
      <div className="hero-glow" />
      <MandalaHero />

      <div className="hero-content">
        <div>
          <div className="hero-kicker">لینا &nbsp;·&nbsp; To Receive. To Wear.</div>
          <h1>
            <span className="bl">South Asian</span>
            <span className="bl">craft, built</span>
            <span className="bl">to <em>fit you.</em></span>
          </h1>
        </div>
        <div className="hero-right">
          <p className="hero-desc">
            Lehna is the first certified platform connecting South and Southeast Asian occasion wear
            to midsize American women — sizes 10 to 18. Every measurement verified in-house.
            Every piece photographed on real bodies. Zero guesswork at checkout.
          </p>
          <div className="hero-acts">
            <a href="#waitlist" className="btn-a" onClick={(e) => scrollTo(e, '#waitlist')}>
              Join the Waitlist
            </a>
            <a href="#certificate" className="btn-b" onClick={(e) => scrollTo(e, '#certificate')}>
              How It Works
            </a>
          </div>
        </div>
      </div>

      <div className="stat-bar">
        <div className="stat-cell">
          <div className="stat-num">5.4<em>M</em></div>
          <div className="stat-src">SAALT · US Census</div>
          <div className="stat-label">South Asians in the US — Indian, Pakistani, Bangladeshi, Nepali — fastest-growing major ethnic group</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">2<em>×</em></div>
          <div className="stat-src">Kellogg School of Management, 2024</div>
          <div className="stat-label">South Asian American household income vs. national median — highest-earning diaspora in the US</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">54<em>%</em></div>
          <div className="stat-src">Mys Tyler Insights, 2024 — 42,000+ women</div>
          <div className="stat-label">of US women wear size 14+. At AW25 Fashion Week, they wore just 0.3% of runway looks</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">$107<em>B</em></div>
          <div className="stat-src">Credence Research, 2024</div>
          <div className="stat-label">US plus-size women's apparel market, 5% CAGR — occasion wear nearly untouched by high fashion</div>
        </div>
      </div>
    </section>
  )
}
