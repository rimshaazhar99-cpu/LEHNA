const steps = [
  {
    n: 'i.',
    title: 'Brand applies',
    body: 'Ethical production, midsize range, off-the-shelf stock. Meet the criteria — you\'re in.',
  },
  {
    n: 'ii.',
    title: 'Lehna certifies',
    body: 'One garment per size, shipped to us. We measure every point, photograph on real bodies, issue the Certificate.',
  },
  {
    n: 'iii.',
    title: 'Women discover',
    body: 'Enter measurements once. We surface certified brands that fit — by size, occasion, style, and ship time.',
  },
  {
    n: 'iv.',
    title: 'Everyone grows',
    body: 'Brands gain real customers and real data. Women gain confidence. Lehna builds trust on both sides.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how-section">
      <div className="inner">
        <div className="how-grid">
          <div className="reveal">
            <div className="eyebrow">Co-growth</div>
            <h2 className="s-title">Three people <em>win every time.</em></h2>
            <p className="how-intro">
              The brand gets found by exactly the right audience. The woman gets clothes that
              actually fit — certified, verified, ready to ship. Lehna grows because both of them
              do. No inventory. No guesswork. No missed events.
            </p>
          </div>
          <div className="reveal d1">
            {steps.map((s, i) => (
              <div key={i} className="how-step">
                <div className="hs-n">{s.n}</div>
                <div>
                  <div className="hs-title">{s.title}</div>
                  <div className="hs-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
