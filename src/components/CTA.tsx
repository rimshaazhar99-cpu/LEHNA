import { useRef, useState } from 'react'

interface ToastProps {
  show: boolean
  message: string
  bottom?: string
}

function Toast({ show, message, bottom = '2.5rem' }: ToastProps) {
  return (
    <div className={`toast${show ? ' show' : ''}`} style={{ bottom }}>
      {message}
    </div>
  )
}

export default function CTA() {
  const emailRef = useRef<HTMLInputElement>(null)
  const bNameRef = useRef<HTMLInputElement>(null)
  const bEmailRef = useRef<HTMLInputElement>(null)
  const bOriginRef = useRef<HTMLInputElement>(null)
  const bNoteRef = useRef<HTMLTextAreaElement>(null)

  const [toast1, setToast1] = useState(false)
  const [toast2, setToast2] = useState(false)

  const showToast = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(true)
    setTimeout(() => setter(false), 3500)
  }

  const handleJoin = () => {
    const input = emailRef.current
    if (!input) return
    if (!input.value || !input.value.includes('@')) {
      const orig = input.placeholder
      input.placeholder = 'please enter a valid email'
      setTimeout(() => { input.placeholder = orig }, 2500)
      return
    }
    showToast(setToast1)
    input.value = ''
  }

  const handleBrand = () => {
    const n = bNameRef.current
    const e = bEmailRef.current
    if (!n || !e) return
    if (!n.value || !e.value || !e.value.includes('@')) {
      n.style.borderColor = 'rgba(191,160,154,.5)'
      setTimeout(() => { n.style.borderColor = '' }, 2000)
      return
    }
    showToast(setToast2)
    if (bNameRef.current)   bNameRef.current.value = ''
    if (bEmailRef.current)  bEmailRef.current.value = ''
    if (bOriginRef.current) bOriginRef.current.value = ''
    if (bNoteRef.current)   bNoteRef.current.value = ''
  }

  return (
    <>
      <section className="section cta-section" id="waitlist">
        {/* mandala bg right */}
        <svg
          className="cta-mandala"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="rgba(191,160,154,1)"
          strokeLinecap="round"
          strokeWidth=".75"
        >
          <circle cx="150" cy="150" r="138" />
          <circle cx="150" cy="150" r="108" />
          <circle cx="150" cy="150" r="76" />
          <circle cx="150" cy="150" r="46" />
          <circle cx="150" cy="150" r="20" />
          <g strokeWidth=".9">
            <path d="M150 12 C156 40 156 70 150 84 C144 70 144 40 150 12Z" />
            <path d="M150 288 C156 260 156 230 150 216 C144 230 144 260 150 288Z" />
            <path d="M12 150 C40 156 70 156 84 150 C70 144 40 144 12 150Z" />
            <path d="M288 150 C260 156 230 156 216 150 C230 144 260 144 288 150Z" />
            <path d="M47 47 C66 75 68 104 56 118 C44 104 44 74 47 47Z" />
            <path d="M253 47 C234 75 232 104 244 118 C256 104 256 74 253 47Z" />
            <path d="M47 253 C66 225 68 196 56 182 C44 196 44 226 47 253Z" />
            <path d="M253 253 C234 225 232 196 244 182 C256 196 256 226 253 253Z" />
          </g>
          <g fill="rgba(191,160,154,.5)" stroke="none">
            <circle cx="150" cy="12" r="2.5" />
            <circle cx="150" cy="288" r="2.5" />
            <circle cx="12" cy="150" r="2.5" />
            <circle cx="288" cy="150" r="2.5" />
            <circle cx="150" cy="150" r="3" />
          </g>
        </svg>

        <div className="inner">
          <div className="cta-grid" id="brand-cta">
            {/* Women pane */}
            <div className="cta-pane reveal">
              <div className="cta-ey">For Women</div>
              <h2 className="cta-title">Dressed for <em>this moment.</em></h2>
              <p className="cta-body">
                Join women across the US on the Lehna waitlist. First access to certified South and
                Southeast Asian brands built for sizes 10 to 18. No guesswork. No returns. Just
                clothes that fit.
              </p>
              <label className="f-label">Your email address</label>
              <div className="f-row">
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="your@email.com"
                  onKeyDown={(e) => { if (e.key === 'Enter') handleJoin() }}
                />
                <button onClick={handleJoin}>Join →</button>
              </div>
              <div className="f-note">No spam. We write when we have something real to say.</div>
            </div>

            <div className="cta-vdiv" />

            {/* Brand pane */}
            <div className="cta-pane reveal d1">
              <div className="cta-ey">For Brands</div>
              <h2 className="cta-title">Apply to be <em>certified.</em></h2>
              <p className="cta-body">
                Ethical production. Sizes US 10–18. Off-the-shelf availability. Founding brand
                status includes preferred placement, early data access, and co-marketing support.
              </p>
              <div className="b-form">
                <input className="b-input" type="text" ref={bNameRef} placeholder="Brand name" />
                <input className="b-input" type="email" ref={bEmailRef} placeholder="Contact email" />
                <input className="b-input" type="text" ref={bOriginRef} placeholder="Country of manufacture" />
                <textarea
                  className="b-input area"
                  ref={bNoteRef}
                  placeholder="Briefly describe your brand and size range"
                />
                <button
                  className="btn-a"
                  style={{ alignSelf: 'flex-start', marginTop: '.5rem' }}
                  onClick={handleBrand}
                >
                  Submit Application →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toast show={toast1} message="You're on the list." />
      <Toast show={toast2} message="Application received." bottom="5.5rem" />
    </>
  )
}
