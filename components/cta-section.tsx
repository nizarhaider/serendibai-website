'use client'

import { type FormEvent, useState } from 'react'

const whatsappNumber = '94742530708'

export default function CTASection() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    callVolume: '',
    message: '',
  })

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const message = [
      'Hi SerendibAI, I would like to book a demo.',
      '',
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Phone: ${form.phone}`,
      `Estimated monthly calls: ${form.callVolume || 'Not sure'}`,
      `Message: ${form.message || 'No additional details'}`,
    ].join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-secondary text-secondary-foreground rounded-lg p-6 sm:p-10 lg:p-12 border border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-heading tracking-widest text-accent uppercase mb-4">
                Book a demo
              </p>
              <h2 className="text-3xl sm:text-5xl font-heading mb-6 leading-tight">
                Ready to see your AI call agent in action?
              </h2>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed">
                Fill out the form and it will open WhatsApp with your demo
                request ready to send. We will walk through how SerendibAI can
                answer your inbound calls, collect bookings, summarize outcomes,
                and hand important conversations to your team.
              </p>

              <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-heading mb-2">What happens next</p>
                <p className="text-sm leading-relaxed text-secondary-foreground/75">
                  We review your call flow, languages, handoff needs, and call
                  volume before recommending the right setup.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg bg-background p-4 sm:p-6 text-foreground">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="grid gap-2 text-sm font-heading">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    className="rounded border border-border bg-card px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-heading">
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    className="rounded border border-border bg-card px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                    placeholder="07X XXX XXXX"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-heading">
                Business name
                <input
                  required
                  value={form.business}
                  onChange={(event) => updateField('business', event.target.value)}
                  className="rounded border border-border bg-card px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                  placeholder="Company or shop name"
                />
              </label>

              <label className="grid gap-2 text-sm font-heading">
                Estimated monthly calls
                <select
                  value={form.callVolume}
                  onChange={(event) => updateField('callVolume', event.target.value)}
                  className="rounded border border-border bg-card px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                >
                  <option value="">Not sure yet</option>
                  <option value="Under 500">Under 500</option>
                  <option value="500 to 2,000">500 to 2,000</option>
                  <option value="2,000 to 5,000">2,000 to 5,000</option>
                  <option value="5,000+">5,000+</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-heading">
                What should the AI agent handle?
                <textarea
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  className="min-h-28 rounded border border-border bg-card px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                  placeholder="Support calls, bookings, after-hours calls, language needs..."
                />
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-heading"
                >
                  Send via WhatsApp
                </button>
                <a
                  href="#pricing"
                  className="w-full sm:w-auto px-8 py-3 text-center border-2 border-secondary text-secondary rounded hover:bg-secondary/5 transition-colors font-heading"
                >
                  Estimate pricing
                </a>
              </div>

              <p className="text-xs text-muted-foreground">
                WhatsApp will open in a new tab with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
