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

    res.statusCode = upstream.ok ? 200 : 502
    res.json({ ok: upstream.ok })
  } catch (err: any) {
    res.statusCode = 502
    res.json({ ok: false, error: err?.message ?? 'Upstream error' })
  }
}

