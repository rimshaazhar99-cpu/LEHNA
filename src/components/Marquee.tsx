const items = [
  { text: 'Lehna Certified', hi: true },
  { text: 'In-House Measured', hi: false },
  { text: 'Real Bodies', hi: true },
  { text: 'South Asian Craft', hi: false },
  { text: 'Sizes 10–18', hi: true },
  { text: 'Ready to Ship', hi: false },
  { text: 'Occasion Wear', hi: true },
  { text: 'Zero Guesswork', hi: false },
]

// Doubled for seamless loop
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="mq-wrap">
      <div className="mq-track">
        {doubled.map((item, i) => (
          <span key={i} className={`mi${item.hi ? ' hi' : ''}`}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
