const cells = [
  {
    tag: 'SA Diaspora · SAALT / US Census',
    num: '5.4M',
    blush: true,
    src: 'South Asians in the US',
    desc: 'Indian, Pakistani, Bangladeshi, Nepali, Sri Lankan. ~40% growth 2010–2017. The 2020 Census found 688K Pakistani Americans alone — double prior estimates.',
    delay: '',
  },
  {
    tag: 'Buying Power · Kellogg School, 2024',
    num: '2×',
    blush: false,
    src: 'Household income vs. national median',
    desc: 'South Asian Americans are the highest-earning ethnic group in the US. 87% of Indian Americans highly value their cultural identity — driving demand for culturally specific fashion.',
    delay: 'd1',
  },
  {
    tag: 'Ethnic Wear · Grand View Research, 2023',
    num: '$92B',
    blush: true,
    src: 'Global ethnic wear, 6% CAGR',
    desc: 'Driven by diaspora demand, festive occasions, and rising cultural identity in fashion. No certified, curated US destination exists for South Asian occasion wear in sizes 10–18.',
    delay: 'd2',
  },
  {
    tag: 'The Body · Mys Tyler, 2024 — 42,000 women',
    num: '54%',
    blush: false,
    src: 'of US women wear size 14+',
    desc: 'The majority is the customer. The minority gets the runway. At AW25 Fashion Week, size 14+ models wore just 0.3% of all looks — a gap that is commercial, not aesthetic.',
    delay: '',
  },
  {
    tag: 'US Market · Credence Research, 2024',
    num: '$107B',
    blush: true,
    src: 'US plus-size women\'s apparel, 5% CAGR',
    desc: 'North America holds 41% of global plus-size market share. Growing faster than overall women\'s apparel. Occasion wear within it remains almost entirely uncaptured.',
    delay: 'd1',
  },
  {
    tag: 'The Void · Lehna, 2025',
    num: '0',
    blush: false,
    src: 'Certified platforms for this',
    desc: 'No certified platform connects South and Southeast Asian occasion wear to midsize American women. Wait times are weeks. Sizing is guesswork. Returns are constant. Lehna ends that.',
    delay: 'd2',
  },
]

export default function MarketData() {
  return (
    <section className="section data-section">
      <div className="inner">
        <div className="data-header reveal">
          <div>
            <div className="eyebrow">The Market</div>
            <h2 className="s-title">The gap is not <em>a niche.</em></h2>
          </div>
          <p className="data-intro">
            The South Asian diaspora is the US's highest-earning ethnic group — growing 40% in a
            decade, deeply culturally rooted, and actively seeking fashion that reflects that
            identity. Combined with a $107B domestic plus-size market that high fashion has barely
            touched, the gap Lehna fills is both cultural and commercial.
          </p>
        </div>
        <div className="data-grid">
          {cells.map((c, i) => (
            <div key={i} className={`data-cell reveal${c.delay ? ' ' + c.delay : ''}`}>
              <div className="d-tag">{c.tag}</div>
              <div className={`d-num${c.blush ? ' b' : ''}`}>{c.num}</div>
              <div className="d-src">{c.src}</div>
              <div className="d-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
