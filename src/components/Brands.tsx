const brands = [
  { idx: 'i.',   name: 'Noor Collective', loc: 'Lahore, Pakistan',    style: 'Occasion · Bridal',      sizes: 'US 10–22', delay: '' },
  { idx: 'ii.',  name: 'Gulzar Studio',   loc: 'Mumbai, India',       style: 'Festive · Fusion',       sizes: 'US 10–18', delay: 'd1' },
  { idx: 'iii.', name: 'Zer Studio',      loc: 'Dhaka, Bangladesh',   style: 'Contemporary · Modest',  sizes: 'US 10–18', delay: '' },
  { idx: 'iv.',  name: 'Kain by Nadia',   loc: 'Jakarta, Indonesia',  style: 'Batik · Occasion',       sizes: 'US 12–20', delay: 'd1' },
  { idx: 'v.',   name: 'Raya Collective', loc: 'Manila, Philippines', style: 'Festive · Editorial',    sizes: 'US 12–22', delay: '' },
]

export default function Brands() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="section brands-section" id="brands">
      <div className="inner">
        <div className="brands-head reveal">
          <div>
            <div className="eyebrow">Founding Brands</div>
            <h2 className="s-title">Certified. Ethical. <em>Midsize-forward.</em></h2>
          </div>
          <div className="brands-meta">
            South Asia &amp; Southeast Asia<br />
            Certified · Ready to ship
          </div>
        </div>

        {brands.map((b, i) => (
          <div key={i} className={`brand-row reveal${b.delay ? ' ' + b.delay : ''}`}>
            <div className="br-idx">{b.idx}</div>
            <div>
              <div className="br-name">{b.name}</div>
              <div className="br-loc">{b.loc}</div>
            </div>
            <div className="br-style">{b.style}</div>
            <div className="br-badge">Certified</div>
            <div className="br-sizes">{b.sizes}</div>
          </div>
        ))}

        <div className="brand-apply reveal">
          <div>
            <div className="ba-ey">For Brands</div>
            <div className="ba-title">Apply to be a founding brand.</div>
            <div className="ba-body">
              Ethical production, midsize range (US 10–18), off-the-shelf inventory. If that's you,
              Lehna gives you certified access to a high-income, underserved American audience that
              is actively looking for you.
            </div>
          </div>
          <div className="ba-acts">
            <a href="#brand-cta" className="btn-a" onClick={(e) => scrollTo(e, '#brand-cta')}>Apply Now</a>
            <a href="mailto:brands@lehna.co" className="btn-b">Ask a Question</a>
          </div>
        </div>
      </div>
    </section>
  )
}
