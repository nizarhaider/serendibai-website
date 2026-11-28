'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { trackContact } from '@/lib/meta-pixel'

const plans = [
  { name: 'Starter', price: 14999, minutes: 500, messages: 500, description: 'A focused first agent for a small team.' },
  { name: 'Growth', price: 34999, minutes: 1500, messages: 2000, description: 'For regular daily calls and customer questions.' },
  { name: 'Scale', price: 74999, minutes: 3000, messages: 5000, description: 'For a busy business with more conversations.' },
  { name: 'Custom', price: null, minutes: null, messages: null, description: 'For higher volumes, concurrency, or integrations.' },
]

const number = (value: number) => value.toLocaleString('en-LK')
const money = (value: number) => `Rs ${number(value)}`

export default function PricingCalculator() {
  const [calls, setCalls] = useState(200)
  const [duration, setDuration] = useState(3)
  const [messages, setMessages] = useState(500)
  const minutes = calls * duration
  const recommended = plans.find(plan => plan.minutes === null || (minutes <= plan.minutes && messages <= plan.messages!))!
  const enquiry = `Hi SerendibAI, I estimate ${calls} calls/month at ${duration} min each (${minutes} minutes) and ${messages} WhatsApp replies/month. Please discuss the ${recommended.name} plan.`

  return (
    <section id="pricing" className="bg-background px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <p className="section-label">Pricing</p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <h2 className="editorial-title max-w-xl">One plan for calls and WhatsApp replies.</h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">Each monthly plan includes a voice-minute allowance and a separate reply allowance. We confirm your setup and any extra usage with you before activation.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map(plan => <article key={plan.name} className={`flex flex-col rounded-2xl border p-5 ${recommended.name === plan.name ? 'border-primary bg-card' : 'border-border bg-card/60'}`}>
            <div className="flex items-baseline justify-between gap-2"><h3 className="text-lg">{plan.name}</h3>{recommended.name === plan.name && <span className="text-xs font-semibold text-primary">Suggested</span>}</div>
            <p className="mt-4 text-2xl font-semibold">{plan.price === null ? 'Let’s talk' : money(plan.price)}{plan.price !== null && <span className="text-sm font-normal text-muted-foreground"> / month</span>}</p>
            <p className="mt-3 min-h-10 text-sm leading-5 text-muted-foreground">{plan.description}</p>
            <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              <li>{plan.minutes === null ? 'Tailored voice minutes' : `${number(plan.minutes)} voice minutes / month`}</li>
              <li>{plan.messages === null ? 'Tailored WhatsApp replies' : `${number(plan.messages)} WhatsApp replies / month`}</li>
              <li>English, Sinhala and Tamil</li>
              <li>Business knowledge and call transcripts</li>
            </ul>
          </article>)}
        </div>
        <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-card p-5 sm:p-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Estimate the right allowance</h3>
            <p className="mt-2 text-sm text-muted-foreground">Use a typical month. We’ll confirm the final setup with you.</p>
            <div className="mt-7 space-y-6">
              <label className="block text-sm" htmlFor="pricing-calls">Calls per month <strong className="float-right">{number(calls)}</strong><input id="pricing-calls" type="range" min="50" max="5000" step="50" value={calls} onChange={event => setCalls(Number(event.target.value))} className="mt-3 h-6 w-full cursor-pointer accent-[#54d1c2]" /></label>
              <label className="block text-sm" htmlFor="pricing-duration">Average minutes per call <strong className="float-right">{duration} min</strong><input id="pricing-duration" type="range" min="1" max="30" value={duration} onChange={event => setDuration(Number(event.target.value))} className="mt-3 h-6 w-full cursor-pointer accent-[#54d1c2]" /></label>
              <label className="block text-sm" htmlFor="pricing-messages">WhatsApp replies per month <strong className="float-right">{number(messages)}</strong><input id="pricing-messages" type="range" min="0" max="10000" step="100" value={messages} onChange={event => setMessages(Number(event.target.value))} className="mt-3 h-6 w-full cursor-pointer accent-[#54d1c2]" /></label>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-xl bg-background p-5 sm:p-6">
            <div aria-live="polite">
              <p className="text-sm text-muted-foreground">Estimated monthly usage</p>
              <p className="mt-2 font-semibold">{number(minutes)} call minutes · {number(messages)} replies</p>
              <p className="mt-6 text-sm text-muted-foreground">Suggested plan</p>
              <p className="mt-1 text-2xl font-semibold">{recommended.name}{recommended.price !== null && <span className="ml-2 text-base font-normal">{money(recommended.price)} / month</span>}</p>
            </div>
            <a onClick={trackContact} href={`https://wa.me/94783333567?text=${encodeURIComponent(enquiry)}`} target="_blank" rel="noopener noreferrer" className="site-button mt-7 w-full">Discuss your plan <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-muted-foreground">Monthly allowances do not roll over. Final pricing depends on verified usage, capacity and integrations. Prices exclude applicable taxes, paid WhatsApp templates and bespoke integration work.</p>
      </div>
    </section>
  )
}
