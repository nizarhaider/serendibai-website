'use client'

import { useState } from 'react'
import Slider from 'react-slider'
import { ArrowUpRight } from 'lucide-react'
import { formatCurrency, formatNumberCompact } from '@/lib/format-number'
import '../styles/slider.css'

type CalculatorState = {
  callsPerMonth: number
  minutesPerCall: number
  concurrentCalls: number
}

const controls: Array<{
  key: keyof CalculatorState
  label: string
  min: number
  max: number
  step: number
  suffix?: string
}> = [
  { key: 'callsPerMonth', label: 'Inbound calls per month', min: 100, max: 5000, step: 100 },
  { key: 'minutesPerCall', label: 'Average minutes per call', min: 1, max: 60, step: 1, suffix: ' min' },
  { key: 'concurrentCalls', label: 'Simultaneous calls', min: 1, max: 20, step: 1 },
]

export default function PricingCalculator() {
  const [values, setValues] = useState<CalculatorState>({ callsPerMonth: 500, minutesPerCall: 5, concurrentCalls: 2 })
  const totalCost = Math.round(5000 + values.callsPerMonth * 25 + values.callsPerMonth * values.minutesPerCall * 5 + values.concurrentCalls * 2000)

  return (
    <section className="bg-white px-5 py-48 text-[#202331] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <p className="section-label">Pricing</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <h2 className="editorial-title max-w-[430px]">Simple pricing that grows with your call operations</h2>
            <p className="mt-7 max-w-[390px] text-base leading-7 text-[#596273]">Use the calculator for an indicative monthly estimate. We confirm the final plan after reviewing your call flow, integrations, languages, and support needs.</p>
            <a href="#contact" className="mt-10 inline-flex items-center gap-3 rounded-lg bg-[#071b3a] px-5 py-3 text-sm font-semibold text-white">Talk to our team <ArrowUpRight className="h-4 w-4" /></a>
          </div>

          <div className="product-frame-soft rounded-xl p-5 sm:p-10">
            <div className="ui-window rounded-xl bg-white p-6 sm:p-9">
              <div className="flex items-center justify-between border-b pb-5"><div><p className="text-sm font-semibold">Monthly estimate</p><p className="mt-1 text-xs text-[#7a8392]">All prices in LKR</p></div><p className="display-serif text-4xl text-[#315fff]"><span className="hidden sm:inline">₨{totalCost.toLocaleString()}</span><span className="sm:hidden">{formatCurrency(totalCost)}</span></p></div>
              <div className="mt-8 space-y-9">
                {controls.map((control) => (
                  <div key={control.key}>
                    <div className="mb-4 flex items-baseline justify-between gap-4"><label className="text-sm">{control.label}</label><span className="font-mono text-sm font-medium text-[#315fff]"><span className="hidden sm:inline">{values[control.key].toLocaleString()}{control.suffix}</span><span className="sm:hidden">{formatNumberCompact(values[control.key])}{control.suffix}</span></span></div>
                    <Slider value={values[control.key]} onChange={(value) => setValues((current) => ({ ...current, [control.key]: Array.isArray(value) ? value[0] : value }))} min={control.min} max={control.max} step={control.step} className="slider" thumbClassName="slider-thumb" trackClassName="slider-track" />
                    <div className="mt-2 flex justify-between text-[10px] text-[#8a92a0]"><span>{control.min}</span><span>{control.max.toLocaleString()}</span></div>
                  </div>
                ))}
              </div>
              <div className="mt-9 grid grid-cols-2 gap-3 border-t pt-6 text-xs"><div className="rounded-lg bg-[#f5f6fa] p-4"><p className="text-[#7b8493]">Base platform</p><p className="mt-2 font-semibold">₨5,000</p></div><div className="rounded-lg bg-[#f5f6fa] p-4"><p className="text-[#7b8493]">Managed setup</p><p className="mt-2 font-semibold">Included</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
