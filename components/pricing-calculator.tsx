'use client'

import { useState } from 'react'
import Slider from 'react-slider'
import '../styles/slider.css'
import { formatNumberCompact, formatCurrency } from '@/lib/format-number'

interface CalculatorState {
  callsPerMonth: number
  minutesPerCall: number
  concurrentCalls: number
}

export default function PricingCalculator() {
  const [values, setValues] = useState<CalculatorState>({
    callsPerMonth: 500,
    minutesPerCall: 5,
    concurrentCalls: 2,
  })

  // Pricing model (LKR - Sri Lankan Rupees)
  const baseCost = 5000 // Base monthly cost
  const costPerCall = 25 // Per call
  const costPerMinute = 5 // Per minute of call duration
  const costPerConcurrentSlot = 2000 // Per concurrent call slot

  const totalCost = Math.round(
    baseCost +
      values.callsPerMonth * costPerCall +
      values.callsPerMonth * values.minutesPerCall * costPerMinute +
      values.concurrentCalls * costPerConcurrentSlot
  )

  const handleChange = (index: number, newValue: number | number[]) => {
    const val = Array.isArray(newValue) ? newValue[0] : newValue
    const keys: (keyof CalculatorState)[] = [
      'callsPerMonth',
      'minutesPerCall',
      'concurrentCalls',
    ]
    setValues((prev) => ({
      ...prev,
      [keys[index]]: val,
    }))
  }

  return (
    <section className="bg-[#f3f4ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="eyebrow mb-5">Clear, scalable pricing</p>
          <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-6xl mb-5 text-foreground">
            Estimate your monthly call operations
          </h2>
          <p className="text-lg text-muted-foreground">
            Use this as a planning estimate for inbound AI call handling. Final
            pricing depends on call volume, workflows, integrations, and support
            needs.
          </p>
        </div>

        <div className="bg-card rounded-[28px] p-6 sm:p-10 border border-white shadow-[0_28px_80px_rgba(15,34,29,.1)] ring-1 ring-border/70">
          {/* Calls Per Month */}
          <div className="mb-10">
            <div className="flex justify-between items-baseline mb-6">
              <label className="text-sm font-heading text-secondary">
                Inbound calls per month
              </label>
              <span className="text-lg sm:text-2xl font-heading text-accent">
                <span className="hidden sm:inline">{values.callsPerMonth.toLocaleString()}</span>
                <span className="sm:hidden">{formatNumberCompact(values.callsPerMonth)}</span>
              </span>
            </div>
            <Slider
              value={values.callsPerMonth}
              onChange={(val) => handleChange(0, val)}
              min={100}
              max={5000}
              step={100}
              className="slider"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-3">
              <span>100</span>
              <span>5,000</span>
            </div>
          </div>

          {/* Minutes Per Call */}
          <div className="mb-10">
            <div className="flex justify-between items-baseline mb-6">
              <label className="text-sm font-heading text-secondary">
                Average minutes per call
              </label>
              <span className="text-2xl font-heading text-accent">
                {values.minutesPerCall}
              </span>
            </div>
            <Slider
              value={values.minutesPerCall}
              onChange={(val) => handleChange(1, val)}
              min={1}
              max={60}
              step={1}
              className="slider"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-3">
              <span>1 min</span>
              <span>60 min</span>
            </div>
          </div>

          {/* Concurrent Calls */}
          <div className="mb-10">
            <div className="flex justify-between items-baseline mb-6">
              <label className="text-sm font-heading text-secondary">
                Simultaneous calls
              </label>
              <span className="text-2xl font-heading text-accent">
                {values.concurrentCalls}
              </span>
            </div>
            <Slider
              value={values.concurrentCalls}
              onChange={(val) => handleChange(2, val)}
              min={1}
              max={20}
              step={1}
              className="slider"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-3">
              <span>1</span>
              <span>20</span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="border-t border-border pt-8 mt-10">
            <div className="space-y-3 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Base monthly</span>
                <span className="font-heading text-foreground hidden sm:inline">
                  ₨{baseCost.toLocaleString()}
                </span>
                <span className="font-heading text-foreground sm:hidden">
                  {formatCurrency(baseCost)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Calls 
                  <span className="hidden sm:inline"> ({values.callsPerMonth} × ₨{costPerCall})</span>
                </span>
                <span className="font-heading text-foreground hidden sm:inline">
                  ₨{(values.callsPerMonth * costPerCall).toLocaleString()}
                </span>
                <span className="font-heading text-foreground sm:hidden">
                  {formatCurrency(values.callsPerMonth * costPerCall)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Minutes
                  <span className="hidden sm:inline"> ({values.callsPerMonth} × {values.minutesPerCall} × ₨{costPerMinute})</span>
                </span>
                <span className="font-heading text-foreground hidden sm:inline">
                  ₨
                  {(
                    values.callsPerMonth *
                    values.minutesPerCall *
                    costPerMinute
                  ).toLocaleString()}
                </span>
                <span className="font-heading text-foreground sm:hidden">
                  {formatCurrency(
                    values.callsPerMonth *
                    values.minutesPerCall *
                    costPerMinute
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Simultaneous capacity
                  <span className="hidden sm:inline"> ({values.concurrentCalls} × ₨{costPerConcurrentSlot})</span>
                </span>
                <span className="font-heading text-foreground hidden sm:inline">
                  ₨{(values.concurrentCalls * costPerConcurrentSlot).toLocaleString()}
                </span>
                <span className="font-heading text-foreground sm:hidden">
                  {formatCurrency(values.concurrentCalls * costPerConcurrentSlot)}
                </span>
              </div>
            </div>

            <div className="bg-[#e2f7f0] rounded-2xl p-4 sm:p-5">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-xs sm:text-sm font-heading text-secondary">
                  Estimated monthly
                </span>
                <span className="text-2xl sm:text-4xl font-heading text-primary">
                  <span className="hidden sm:inline">₨{totalCost.toLocaleString()}</span>
                  <span className="sm:hidden">{formatCurrency(totalCost)}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Indicative prices in LKR. We confirm the final plan after reviewing
            your call flow, languages, integrations, and handoff requirements.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#69e0c1] px-8 py-3.5 text-sm font-semibold text-[#0b1714] transition-transform hover:-translate-y-0.5"
          >
            Book a pricing demo
          </a>
        </div>
      </div>
    </section>
  )
}
