export default function Certificate() {
  return (
    <section className="section cert-section" id="certificate">
      {/* mehndi vine corner */}
      <svg
        className="cert-corner"
        viewBox="0 0 320 220"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="rgba(191,160,154,1)"
        strokeLinecap="round"
        strokeWidth=".75"
      >
        <path d="M320 220 C275 195 230 160 210 128 C198 108 196 86 208 70 C222 52 248 54 260 72 C270 86 264 106 248 114 C235 120 221 113 218 100 C215 88 223 77 234 78" />
        <path d="M320 220 C285 200 250 168 232 138 C220 118 220 96 232 80 C245 62 268 62 278 80 C286 94 280 112 266 118 C255 124 242 116 240 104" />
        <path d="M295 220 C265 198 238 168 225 138 C213 112 216 88 228 73" />
        <path d="M248 114 C256 108 260 97 253 90 C247 97 246 108 248 114Z" />
        <path d="M266 118 C272 112 274 100 267 93 C261 100 261 112 266 118Z" />
        <circle cx="234" cy="78" r="3.5" fill="rgba(191,160,154,.4)" stroke="none" />
        <circle cx="240" cy="104" r="2.5" fill="rgba(191,160,154,.4)" stroke="none" />
      </svg>

      <div className="inner">
        <div className="cert-grid">
          <div className="reveal">
            <div className="eyebrow">The Lehna Certificate</div>
            <h2 className="s-title">What you see is <em>exactly</em> what arrives.</h2>
            <p className="cert-desc">
              Every brand on Lehna ships us one garment per size. We measure every point — bust,
              waist, hips, shoulders, arm length, hem — in-house. We photograph on real bodies.
              We publish the Certificate. What you see is what ships.
            </p>
            <div className="pillars">
              <div className="pillar">
                <div className="p-n">i.</div>
                <div className="p-t">Fits as shown</div>
                <div className="p-s">Measured in-house, every size</div>
              </div>
              <div className="pillar">
                <div className="p-n">ii.</div>
                <div className="p-t">Quality confirmed</div>
                <div className="p-s">Photographed on real bodies</div>
              </div>
              <div className="pillar">
                <div className="p-n">iii.</div>
                <div className="p-t">Ships immediately</div>
                <div className="p-s">Off-the-shelf, no wait</div>
              </div>
            </div>
          </div>

          <div className="cert-vdiv" />

          <div className="reveal d1">
            <div className="cert-card">
              <div className="card-head">
                <div className="card-logo">Lehna</div>
                <div className="card-badge">Certified ✓</div>
              </div>
              <div className="card-body">
                <div className="card-brand">Noor Collective</div>
                <div className="card-origin">Lahore, Pakistan &nbsp;·&nbsp; US Size 14</div>
                <div className="meas-grid">
                  <div className="meas"><div className="meas-l">Bust</div><div className="meas-v">114cm</div></div>
                  <div className="meas"><div className="meas-l">Waist</div><div className="meas-v">96cm</div></div>
                  <div className="meas"><div className="meas-l">Hips</div><div className="meas-v">122cm</div></div>
                  <div className="meas"><div className="meas-l">Arm Length</div><div className="meas-v">58cm</div></div>
                  <div className="meas"><div className="meas-l">Shoulder</div><div className="meas-v">46cm</div></div>
                  <div className="meas"><div className="meas-l">Hem</div><div className="meas-v">108cm</div></div>
                </div>
              </div>
              <div className="card-foot">
                <div className="card-verified">Lehna Certified · In-house measured</div>
                <div className="card-id">LHN-2025-0041</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
