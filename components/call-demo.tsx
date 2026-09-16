'use client'

import { Check, LoaderCircle, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react'
import { type FormEvent, useEffect, useState } from 'react'

const api = 'https://portal.serendibai.lk/api/demo'
const countries = [
  ['Sri Lanka', '+94'],
  ['India', '+91'],
  ['United Kingdom', '+44'],
  ['United States / Canada', '+1'],
  ['United Arab Emirates', '+971'],
] as const

type Demo = { id: string; state: string; whatsappUrl: string }

const messages: Record<string, string> = {
  calling: 'Calling you on WhatsApp now…',
  completed: 'Thanks for trying SerendibAI.',
  declined: 'The call was declined. You can request another demo later.',
  failed: 'We could not place the call. Please try again later.',
  expired: 'This request expired. Submit the form again to restart.',
}

export default function CallDemo() {
  const [country, setCountry] = useState('+94')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [demo, setDemo] = useState<Demo | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!demo || ['completed', 'declined', 'failed', 'expired'].includes(demo.state)) return
    const timer = window.setInterval(async () => {
      const response = await fetch(`${api}?id=${demo.id}`, { cache: 'no-store' })
      if (response.ok) setDemo({ id: demo.id, ...(await response.json()) })
    }, 2500)
    return () => window.clearInterval(timer)
  }, [demo])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')
    const local = phone.replace(/^0/, '')
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: `${country}${local}`, consent, company: '' }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setDemo(result)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const waiting = demo && ['confirm', 'permission', 'requesting'].includes(demo.state)

  return (
    <section id="try-demo" className="bg-[#eef2f0] py-20 sm:py-28">
      <div className="site-section grid items-center gap-10 lg:grid-cols-[.86fr_1.14fr] lg:gap-16">
        <div>
          <p className="section-label mb-4">TRY IT YOURSELF</p>
          <h2 className="editorial-title max-w-lg text-primary">Receive a live call from our AI agent.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">Enter your WhatsApp number and hear SerendibAI handle a real conversation in English, Sinhala, or Tamil.</p>
          <div className="mt-8 grid gap-4 text-sm text-primary/80">
            <p className="flex items-center gap-3"><MessageCircle size={18} className="text-[#a77422]" />Approve the call inside WhatsApp</p>
            <p className="flex items-center gap-3"><PhoneCall size={18} className="text-[#a77422]" />Answer a short, three-minute demo call</p>
            <p className="flex items-center gap-3"><ShieldCheck size={18} className="text-[#a77422]" />Your permission can be changed in WhatsApp anytime</p>
          </div>
        </div>

        <div className="rounded-[22px] border bg-white p-5 shadow-[0_22px_60px_rgba(12,38,36,.10)] sm:p-8">
          {!demo ? (
            <form onSubmit={submit} className="grid gap-5">
              <div>
                <p className="font-heading text-xl text-primary">Get a demo call</p>
                <p className="mt-1 text-sm text-muted-foreground">Use a number with WhatsApp installed.</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
                <label className="grid gap-2 text-sm font-semibold">Country
                  <select value={country} onChange={event => setCountry(event.target.value)} className="h-12 rounded-lg border bg-white px-3 font-normal">
                    {countries.map(([name, code]) => <option key={code} value={code}>{name} ({code})</option>)}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">WhatsApp number
                  <input required inputMode="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} placeholder={country === '+94' ? '77 123 4567' : 'Phone number'} className="h-12 rounded-lg border px-4 font-normal" />
                </label>
              </div>
              <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                <input required type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} className="mt-1 h-4 w-4 accent-[#0c2624]" />
                I own or control this number and agree to receive one AI demo call. The call may be recorded and transcribed.
              </label>
              {error && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
              <button disabled={loading} className="site-button h-12 w-full disabled:opacity-60">
                {loading ? <LoaderCircle size={18} className="animate-spin" /> : <PhoneCall size={18} />}
                {loading ? 'Preparing your demo…' : 'Call me on WhatsApp'}
              </button>
              <p className="text-center text-xs leading-5 text-muted-foreground">WhatsApp requires you to approve calls before our agent can ring you.</p>
            </form>
          ) : (
            <div className="flex min-h-72 flex-col items-center justify-center text-center">
              {waiting ? <MessageCircle size={35} className="text-[#a77422]" /> : demo.state === 'completed' ? <Check size={35} className="text-emerald-600" /> : <PhoneCall size={35} className="text-[#a77422]" />}
              <h3 className="mt-5 text-2xl text-primary">{waiting ? 'One quick step in WhatsApp' : messages[demo.state] || 'Preparing your call…'}</h3>
              {waiting && <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">Open WhatsApp, send the prepared message, then tap <strong>Allow calls</strong>. We will call as soon as you approve.</p>}
              {demo.state === 'calling' && <p className="mt-3 text-sm text-muted-foreground">Keep WhatsApp open and answer the incoming call from SerendibAI.</p>}
              {waiting && <a href={demo.whatsappUrl} target="_blank" rel="noreferrer" className="site-button mt-6 w-full sm:w-auto"><MessageCircle size={18} />Continue in WhatsApp</a>}
              {['completed', 'declined', 'failed', 'expired'].includes(demo.state) && <button onClick={() => setDemo(null)} className="mt-6 text-sm font-semibold text-primary underline underline-offset-4">Start again</button>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
