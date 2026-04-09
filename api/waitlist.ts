declare const process: any

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end('Method Not Allowed')
    return
  }

  const endpoint = process.env.WAITLIST_ENDPOINT
  if (!endpoint) {
    res.statusCode = 500
    res.json({ ok: false, error: 'WAITLIST_ENDPOINT not configured' })
    return
  }

  const email = (req.body?.email ?? '').toString().trim()
  if (!email || !email.includes('@')) {
    res.statusCode = 400
    res.json({ ok: false, error: 'Invalid email' })
    return
  }

  const body = new URLSearchParams()
  body.set('email', email)
  body.set('source', 'lehna-waitlist-customers')

  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body,
    })

    if (!upstream.ok) {
      res.statusCode = 502
      res.json({ ok: false, error: `Upstream HTTP ${upstream.status}` })
      return
    }

    // Apps Script sometimes returns 200 even if it didn't write (e.g. errors in doPost).
    // Require an explicit JSON success payload.
    const text = await upstream.text()
    let json: any = null
    try {
      json = JSON.parse(text)
    } catch {
      // ignore
    }

    const ok =
      (typeof json?.ok === 'boolean' && json.ok === true) ||
      (typeof json?.status === 'string' && json.status.toLowerCase() === 'ok')

    if (!ok) {
      res.statusCode = 502
      res.json({
        ok: false,
        error: 'Upstream did not confirm success',
        // Keep it short; avoids dumping huge HTML.
        upstreamBody: text.slice(0, 200),
      })
      return
    }

    res.statusCode = 200
    res.json({ ok: true })
  } catch (err: any) {
    res.statusCode = 502
    res.json({ ok: false, error: err?.message ?? 'Upstream error' })
  }
}

