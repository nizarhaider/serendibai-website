'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function PricingCalculator() {
  const [calls, setCalls] = useState(200)
  const [duration, setDuration] = useState(3)
  const minutes = calls * duration
  const message = `Hi SerendibAI, I'd like to discuss pricing. I estimate ${calls} inbound calls per month, averaging ${duration} minutes each (${minutes} minutes monthly).`
  return (
    <section className="bg-white px-5 py-24 text-[#0e1c1b] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <p className="section-label">Pricing</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="editorial-title">Plans based on your usage.</h2>
            <p className="mt-7 max-w-[470px] text-base leading-7 text-[#5c6f6c]">For now, our call and message rates are based on estimated Gemini usage costs with no markup. We’ll confirm the rates and your minutes and messages allowance when we set up your plan.</p>
            <p className="mt-5 max-w-[470px] text-sm leading-6 text-[#5c6f6c]">Estimates depend on usage and can differ from the final provider bill. Hosting and other costs are not included in these Gemini-based rates.</p>
          </div>
          <div className="product-frame-soft rounded-xl p-5 sm:p-8"><div className="ui-window rounded-xl bg-white p-5 sm:p-8">
            <h3 className="text-lg font-semibold">Estimate your call usage</h3>
            <div className="mt-8 space-y-7">
              <label className="block text-sm" htmlFor="pricing-calls">Inbound calls per month <strong className="float-right">{calls.toLocaleString('en-US')}</strong><input id="pricing-calls" type="range" min="50" max="5000" step="50" value={calls} onChange={event => setCalls(Number(event.target.value))} className="mt-3 h-6 w-full cursor-pointer accent-[#0c2624]" /></label>
              <label className="block text-sm" htmlFor="pricing-duration">Average minutes per call <strong className="float-right">{duration} min</strong><input id="pricing-duration" type="range" min="1" max="30" value={duration} onChange={event => setDuration(Number(event.target.value))} className="mt-3 h-6 w-full cursor-pointer accent-[#0c2624]" /></label>
            </div>
            <p className="mt-8 border-t border-[#dce5df] pt-6 text-sm" aria-live="polite">Estimated usage: <strong>{minutes.toLocaleString('en-US')} minutes / month</strong></p>
            <a href={`https://wa.me/94783333567?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#0c2624] px-5 py-3 text-sm font-semibold text-white">Discuss your plan <ArrowUpRight className="h-4 w-4" /></a>
          </div></div>
        </div>
      </div>
    </section>
  )
}
