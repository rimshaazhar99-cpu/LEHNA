const invCells = [
  {
    n: 'i.',
    title: 'Business Model',
    body: 'Brand listing fees for certification. Commission on transactions driven through Lehna. Premium placement and analytics for brands who want deeper consumer insights. No inventory risk. Capital-light by design.',
    big: null,
    delay: '',
  },
  {
    n: 'ii.',
    title: 'Defensibility',
    body: 'The Lehna Certificate creates a data flywheel: every certified garment builds our measurement database. Over time, that enables fit prediction, personalised recommendations, and a switching cost no competitor can buy overnight.',
    big: null,
    delay: 'd1',
  },
  {
    n: 'iii.',
    title: 'Why Now',
    body: 'The South Asian diaspora in the US grew 40% in one decade and earns 2× the national median. Gen-Z South Asian Americans are culturally proud, digitally native, and underserved by every existing platform.',
    big: null,
    delay: 'd2',
  },
  {
    n: 'iv.',
    title: 'TAM / SAM / SOM',
    body: 'TAM: $107B US plus-size apparel + $92B global ethnic wear. SAM: South Asian American women, sizes 10–18 (~1.2M women). SOM: 3% capture in Year 3 = meaningful revenue at Lehna\'s margin structure.',
    big: '~1.2M',
    delay: '',
  },
  {
    n: 'v.',
    title: 'Traction',
    body: 'Waitlist growing organically. Five founding brand partnerships confirmed across Pakistan, India, Bangladesh, and Southeast Asia. Pre-launch community engagement across diaspora networks. Forbes 30 Under 30 Summit cohort.',
    big: null,
    delay: 'd1',
  },
  {
    n: 'vi.',
    title: 'The Founder',
    body: 'Brand strategy and project management at CBX and Brandpie — 34 SKUs across global clients. South Asian, Muslim, midsize woman. The founder is the customer. The insight is lived, not researched.',
    big: null,
    delay: 'd2',
  },
]

const roadmapSteps = [
  {
    phase: 'Phase 01 · Now',
    title: 'Curated Shop',
    body: 'Certified brands. Verified measurements. Waitlist-first access. Build trust on both sides before scale.',
    now: true,
  },
  {
    phase: 'Phase 02 · Year 2',
    title: 'Fit Platform',
    body: 'Women enter measurements once. Lehna surfaces brands that fit — personalised, by occasion, by size. Data flywheel begins.',
    now: false,
  },
  {
    phase: 'Phase 03 · Year 3+',
    title: 'Marketplace',
    body: 'Open platform. Any certified brand can list. Lehna becomes the authentication and discovery layer for the entire category.',
    now: false,
  },
]

export default function Investors() {
  return (
    <section className="section inv-section" id="investors">
      {/* botanical mehndi bg */}
      <svg
        className="inv-bg"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="rgba(191,160,154,1)"
        strokeLinecap="round"
        strokeWidth=".8"
      >
        <path d="M50 400 C80 350 100 300 120 260 C140 220 160 190 180 170 C200 150 220 140 240 130 C260 120 280 115 300 100 C320 85 340 60 360 20" />
        <path d="M120 260 C100 240 88 215 95 195 C105 200 115 220 120 260Z" />
        <path d="M120 260 C140 245 155 225 148 205 C136 210 125 230 120 260Z" />
        <path d="M180 170 C160 158 148 136 156 118 C166 124 174 146 180 170Z" />
        <path d="M180 170 C200 162 212 142 204 124 C193 130 183 150 180 170Z" />
        <path d="M240 130 C220 120 210 100 218 82 C228 88 236 108 240 130Z" />
        <path d="M240 130 C258 124 268 104 260 86 C250 92 242 112 240 130Z" />
        <path d="M300 100 C282 92 272 72 280 55 C290 61 298 80 300 100Z" />
        <path d="M300 100 C318 95 326 75 318 58 C308 64 302 83 300 100Z" />
        <circle cx="95" cy="195" r="5" />
        <circle cx="156" cy="118" r="4" />
        <circle cx="218" cy="82" r="4" />
        <circle cx="280" cy="55" r="3.5" />
        <circle cx="120" cy="260" r="2.5" fill="rgba(191,160,154,.5)" stroke="none" />
        <circle cx="180" cy="170" r="2.5" fill="rgba(191,160,154,.5)" stroke="none" />
        <circle cx="240" cy="130" r="2" fill="rgba(191,160,154,.5)" stroke="none" />
      </svg>

      <div className="inner">
        <div className="inv-header reveal">
          <div>
            <div className="eyebrow">For Investors</div>
            <h2 className="s-title">The thesis is <em>simple.</em></h2>
          </div>
          <p className="inv-thesis">
            <strong>Lehna is a certification and discovery platform, not a retailer.</strong> We
            don't hold inventory. We issue trust — and trust, at scale, is a defensible moat. The
            RealReal proved authentication commands a premium. Lehna does the same for fit.
          </p>
        </div>

        <div className="inv-grid">
          {invCells.map((c, i) => (
            <div key={i} className={`inv-cell reveal${c.delay ? ' ' + c.delay : ''}`}>
              <div className="ic-n">{c.n}</div>
              <div className="ic-title">{c.title}</div>
              <div className="ic-body">{c.body}</div>
              {c.big && <div className="ic-big">{c.big}</div>}
            </div>
          ))}
        </div>

        <div className="roadmap reveal">
          <div className="rm-label">Three-Stage Roadmap</div>
          <div className="rm-steps">
            {roadmapSteps.map((s, i) => (
              <div key={i} className={`rm-step${s.now ? ' now' : ''}`}>
                <div className={`rm-phase${s.now ? ' now' : ''}`}>{s.phase}</div>
                <div className="rm-title">{s.title}</div>
                <div className="rm-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="inv-cta reveal">
          <div>
            <div className="ict-title">Interested in Lehna?</div>
            <div className="ict-sub">We are raising a pre-seed round. Deck available on request.</div>
          </div>
          <div className="ict-acts">
            <a href="mailto:invest@lehna.co" className="btn-a">Request the Deck</a>
            <a href="mailto:invest@lehna.co" className="btn-b">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
