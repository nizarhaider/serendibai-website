'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 9999, minutes: 600, description: 'For a small business getting started.' },
  { name: 'Growth', price: 24999, minutes: 2000, description: 'For a team with a steady flow of enquiries.' },
  { name: 'Scale', price: 49999, minutes: 5000, description: 'For a busy business handling more calls.' },
  { name: 'Custom', price: null, minutes: null, description: 'For higher volumes and tailored integrations.' },
]

const controls = [
  { key: 'calls', label: 'Inbound calls per month', min: 50, max: 5000, step: 50, suffix: '' },
  { key: 'duration', label: 'Average minutes per call', min: 1, max: 30, step: 1, suffix: ' min' },
  { key: 'concurrent', label: 'Maximum simultaneous calls', min: 1, max: 20, step: 1, suffix: '' },
] as const

const number = (value: number) => value.toLocaleString('en-US')

export default function PricingCalculator() {
  const [values, setValues] = useState({ calls: 200, duration: 3, concurrent: 2 })
  const minutes = values.calls * values.duration
  const recommended = plans.find((plan) => plan.minutes !== null && minutes <= plan.minutes) ?? plans[3]
  const message = `Hi SerendibAI, I'm interested in ${recommended.name}. My estimate is ${values.calls} inbound WhatsApp calls per month, ${values.duration} minutes per call (${minutes} minutes monthly), and up to ${values.concurrent} calls at a time. Please help me get started.`

  return (
    <section className="bg-white px-5 py-24 text-[#0e1c1b] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <p className="section-label">Pricing</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="editorial-title max-w-[460px]">Find the right plan for your calls.</h2>
            <p className="mt-7 max-w-[410px] text-base leading-7 text-[#5c6f6c]">A monthly subscription for your inbound WhatsApp voice agent. Adjust your call volume and conversation length to find a plan that fits. Let us know the most calls you expect at once so we can plan your setup.</p>
            <p className="mt-5 max-w-[410px] text-sm leading-6 text-[#5c6f6c]">Every plan includes Sinhala, Tamil, and English, your business knowledge and catalogue, call transcripts, and the customer dashboard. Bookings, orders, and support tickets are configured for your business.</p>
          </div>

          <div className="product-frame-soft rounded-xl p-5 sm:p-8">
            <div className="ui-window rounded-xl bg-white p-5 sm:p-8">
              <h3 className="text-lg font-semibold">Make it yours</h3>
              <p className="mt-1 text-sm text-[#5c6f6c]">Start with a typical month. You can change this anytime.</p>
              <div className="mt-8 space-y-7">
                {controls.map((control) => (
                  <div key={control.key}>
                    <div className="mb-3 flex items-baseline justify-between gap-3">
                      <label htmlFor={`pricing-${control.key}`} className="text-sm">{control.label}</label>
                      <output htmlFor={`pricing-${control.key}`} className="shrink-0 font-mono text-sm font-medium">{number(values[control.key])}{control.suffix}</output>
                    </div>
                    <input id={`pricing-${control.key}`} type="range" value={values[control.key]} onChange={(event) => setValues((current) => ({ ...current, [control.key]: Number(event.target.value) }))} min={control.min} max={control.max} step={control.step} className="h-6 w-full cursor-pointer accent-[#0c2624] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0c2624]" />
                    {control.key === 'concurrent' && <p className="mt-2 text-xs leading-5 text-[#5c6f6c]">For setup planning only. This does not change your minutes or recommended plan.</p>}
                    <div className="mt-1 flex justify-between text-xs text-[#5c6f6c]"><span>{number(control.min)}{control.suffix}</span><span>{number(control.max)}{control.suffix}</span></div>
                  </div>
                ))}
              </div>
              <div aria-live="polite" aria-atomic="true" className="mt-8 border-t border-[#dce5df] pt-6">
                <p className="text-sm text-[#5c6f6c]">Your estimate: <span className="font-semibold text-[#0c2624]">{number(minutes)} minutes / month</span></p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#5c6f6c]">Recommended for you</p>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
                  <p className="display-serif text-4xl">{recommended.name}</p>
                  <p className="text-xl font-semibold">{recommended.price === null ? 'Let’s talk' : <>Rs {number(recommended.price)}<span className="text-sm font-normal text-[#5c6f6c]"> / month</span></>}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#5c6f6c]">{recommended.minutes === null ? 'Your estimate is above 5,000 monthly minutes. We’ll work through a tailored plan with you.' : `Covers your estimate with ${number(recommended.minutes)} monthly minutes.`}</p>
              </div>
              <a href={`https://wa.me/94742530708?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#0c2624] px-5 py-3 text-sm font-semibold text-white">Discuss {recommended.name} on WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const selected = plan.name === recommended.name
            return (
              <article key={plan.name} aria-label={`${plan.name} plan${selected ? ', recommended' : ''}`} className={`flex flex-col rounded-xl border p-6 ${selected ? 'border-[#0c2624] bg-[#eef2f0]' : 'border-[#dce5df] bg-white'}`}>
                <p className={`mb-5 min-h-5 text-xs font-semibold ${selected ? 'text-[#0c2624]' : 'text-[#5c6f6c]'}`}>{selected ? 'Recommended for you' : 'Monthly subscription'}</p>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-3 text-3xl font-semibold tracking-tight">{plan.price === null ? 'Custom' : `Rs ${number(plan.price)}`}</p>
                <p className="mt-1 text-xs text-[#5c6f6c]">{plan.price === null ? 'Priced around your business' : 'per month · LKR'}</p>
                <p className="mt-5 min-h-12 text-sm leading-6 text-[#5c6f6c]">{plan.description}</p>
                <ul className="my-6 space-y-3 text-sm">
                  {[plan.minutes === null ? 'Tailored monthly minutes' : `${number(plan.minutes)} minutes / month`, 'Business knowledge and catalogue', 'Customer dashboard', 'Guided onboarding'].map((feature) => (
                    <li key={feature} className="flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />{feature}</li>
                  ))}
                </ul>
                <a href={`https://wa.me/94742530708?text=${encodeURIComponent(`Hi SerendibAI, I'd like to discuss the ${plan.name} plan. My estimate is ${values.calls} inbound calls per month, ${values.duration} minutes per call (${minutes} minutes monthly), and up to ${values.concurrent} calls at a time.`)}`} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-between rounded-lg border border-[#0c2624] px-4 py-3 text-sm font-semibold">{plan.price === null ? 'Talk to us' : `Discuss ${plan.name}`}<ArrowUpRight className="h-4 w-4" /></a>
              </article>
            )
          })}
        </div>
        <p className="mt-6 max-w-[900px] text-sm leading-6 text-[#5c6f6c]">Monthly allowances do not roll over. Additional minutes require an agreed upgrade or custom quote. Prices exclude applicable taxes. Bespoke integrations and paid WhatsApp message templates are quoted separately. Final setup and capacity are confirmed during onboarding.</p>
      </div>
    </section>
  )
}
