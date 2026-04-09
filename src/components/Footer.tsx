export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer>
      {/* footer mandala bg */}
      <svg
        className="footer-icon"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="rgba(191,160,154,1)"
        strokeWidth=".8"
        strokeLinecap="round"
      >
        <circle cx="60" cy="60" r="54" />
        <circle cx="60" cy="60" r="40" />
        <circle cx="60" cy="60" r="24" />
        <circle cx="60" cy="60" r="9" />
        <path d="M60 6 C63 22 63 38 60 46 C57 38 57 22 60 6Z" />
        <path d="M60 114 C63 98 63 82 60 74 C57 82 57 98 60 114Z" />
        <path d="M6 60 C22 63 38 63 46 60 C38 57 22 57 6 60Z" />
        <path d="M114 60 C98 63 82 63 74 60 C82 57 98 57 114 60Z" />
        <path d="M23 23 C34 38 36 54 28 62 C20 54 22 37 23 23Z" />
        <path d="M97 23 C86 38 84 54 92 62 C100 54 98 37 97 23Z" />
        <path d="M23 97 C34 82 36 66 28 58 C20 66 22 83 23 97Z" />
        <path d="M97 97 C86 82 84 66 92 58 C100 66 98 83 97 97Z" />
        <circle cx="60" cy="6" r="2" fill="rgba(191,160,154,.5)" stroke="none" />
        <circle cx="60" cy="114" r="2" fill="rgba(191,160,154,.5)" stroke="none" />
        <circle cx="6" cy="60" r="2" fill="rgba(191,160,154,.5)" stroke="none" />
        <circle cx="114" cy="60" r="2" fill="rgba(191,160,154,.5)" stroke="none" />
        <circle cx="60" cy="60" r="3.5" fill="rgba(191,160,154,.5)" stroke="none" />
      </svg>

      <a href="#" className="f-logo">Lehna</a>
      <ul className="f-links">
        <li><a href="#certificate" onClick={(e) => scrollTo(e, '#certificate')}>The Certificate</a></li>
        <li><a href="#investors" onClick={(e) => scrollTo(e, '#investors')}>Investors</a></li>
        <li><a href="#brands" onClick={(e) => scrollTo(e, '#brands')}>Brands</a></li>
        <li><a href="mailto:invest@lehna.co">invest@lehna.co</a></li>
      </ul>
      <div className="f-r">لینا · 2025</div>
    </footer>
  )
}
