'use client'

import { useState } from 'react'
import Slider from 'react-slider'
import '../styles/slider.css'

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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading mb-4 text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Customize your plan based on your call center needs. Adjust the
            sliders to see real-time pricing.
          </p>
        </div>

        <div className="bg-card rounded-lg p-8 sm:p-10 border border-border shadow-sm">
          {/* Calls Per Month */}
          <div className="mb-10">
            <div className="flex justify-between items-baseline mb-6">
              <label className="text-sm font-heading text-secondary">
                Calls per Month
              </label>
              <span className="text-2xl font-heading text-accent">
                {values.callsPerMonth.toLocaleString()}
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
                Minutes per Call
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
                Concurrent Calls
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
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Base monthly</span>
                <span className="font-heading text-foreground">
                  ₨{baseCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Calls ({values.callsPerMonth} × ₨{costPerCall})
                </span>
                <span className="font-heading text-foreground">
                  ₨{(values.callsPerMonth * costPerCall).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Call minutes ({values.callsPerMonth} × {values.minutesPerCall} ×
                  ₨{costPerMinute})
                </span>
                <span className="font-heading text-foreground">
                  ₨
                  {(
                    values.callsPerMonth *
                    values.minutesPerCall *
                    costPerMinute
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Concurrent slots ({values.concurrentCalls} × ₨
                  {costPerConcurrentSlot})
                </span>
                <span className="font-heading text-foreground">
                  ₨{(values.concurrentCalls * costPerConcurrentSlot).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="bg-secondary/5 rounded p-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-heading text-secondary">
                  Estimated Monthly Cost
                </span>
                <span className="text-4xl font-heading text-primary">
                  ₨{totalCost.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            All prices in LKR. Contact us for custom enterprise plans.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-heading text-sm">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
