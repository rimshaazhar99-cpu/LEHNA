import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">Lehna</a>
      <ul className="nav-links">
        <li><a href="#certificate" onClick={(e) => scrollTo(e, '#certificate')}>The Certificate</a></li>
        <li><a href="#investors" onClick={(e) => scrollTo(e, '#investors')}>Investors</a></li>
        <li><a href="#brands" onClick={(e) => scrollTo(e, '#brands')}>Brands</a></li>
        <li><a href="#waitlist" className="nblush" onClick={(e) => scrollTo(e, '#waitlist')}>Join Waitlist</a></li>
      </ul>
    </nav>
  )
}
