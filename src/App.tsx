import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import { MehndiDivider1, MehndiDivider2 } from './components/MehndiDividers'
import Certificate from './components/Certificate'
import MarketData from './components/MarketData'
import Investors from './components/Investors'
import Brands from './components/Brands'
import HowItWorks from './components/HowItWorks'
import Voices from './components/Voices'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <MehndiDivider1 />
      <Certificate />
      <MehndiDivider2 />
      <MarketData />
      <Investors />
      <Brands />
      <HowItWorks />
      <Voices />
      <CTA />
      <Footer />
    </>
  )
}
