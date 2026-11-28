'use client'

import { type FormEvent, useState } from 'react'
import { trackContact } from '@/lib/meta-pixel'

const whatsappNumber = '94783333567'

export default function CTASection() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    businessType: '',
    phone: '',
    callVolume: '',
    replyVolume: '',
    useCase: '',
    details: '',
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
      `Business: ${form.business} (${form.businessType || 'Type not specified'})`,
      `Phone: ${form.phone}`,
      `Estimated monthly calls: ${form.callVolume || 'Not sure'}`,
      `Estimated monthly WhatsApp replies: ${form.replyVolume || 'Not sure'}`,
      `Main use case: ${form.useCase || 'Not sure yet'}`,
      `Notes: ${form.details || 'None'}`,
    ].join('\n')

    trackContact()
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="contact" className="bg-background px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="retell-hero relative overflow-hidden rounded-[24px] border border-white/10 p-6 text-white shadow-[0_35px_100px_rgba(10,29,58,.2)] sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[.2em] text-white/70 uppercase mb-5">
                Book a demo
              </p>
              <h2 className="display-serif text-4xl sm:text-5xl mb-6 leading-[.98]">
                Let it answer the next one.
              </h2>
              <p className="text-base leading-relaxed opacity-90 sm:text-lg">
                Fill out the form and it will open WhatsApp with your demo
                request ready to send. We will walk through how SerendibAI can
                answer your inbound calls, collect bookings, summarize outcomes,
                and hand important conversations to your team.
              </p>

              <p className="mt-6 text-sm"><a href="mailto:info@serendibai.lk" className="underline">info@serendibai.lk</a> · <a href="tel:+94783333567" className="underline">078 333 3567</a></p>

              <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-heading mb-2">What happens next</p>
                <p className="text-sm leading-relaxed text-white/70">
                  We review your call flow, languages, handoff needs, and call
                  volume before recommending the right setup.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 grid gap-4 rounded-[18px] bg-card p-5 text-card-foreground sm:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-heading">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    className="rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-heading">
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    className="rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary"
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
                  className="rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                  placeholder="Company or shop name"
                />
              </label>

              <label className="grid gap-2 text-sm font-heading">
                What kind of business is it?
                <input
                  value={form.businessType}
                  onChange={(event) => updateField('businessType', event.target.value)}
                  className="rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                  placeholder="Clinic, hotel, shop, service business..."
                />
              </label>

              <label className="grid gap-2 text-sm font-heading">
                Estimated monthly calls
                <select
                  value={form.callVolume}
                  onChange={(event) => updateField('callVolume', event.target.value)}
                  className="rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                >
                  <option value="">Not sure yet</option>
                  <option value="Under 500">Under 500</option>
                  <option value="500 to 2,000">500 to 2,000</option>
                  <option value="2,000 to 5,000">2,000 to 5,000</option>
                  <option value="5,000+">5,000+</option>
                </select>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-heading">
                  WhatsApp replies per month
                  <select value={form.replyVolume} onChange={(event) => updateField('replyVolume', event.target.value)} className="rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary">
                    <option value="">Not sure yet</option>
                    <option value="Under 500">Under 500</option>
                    <option value="500–2,000">500–2,000</option>
                    <option value="2,001–5,000">2,001–5,000</option>
                    <option value="Over 5,000">Over 5,000</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-heading">
                  What should the agent help with?
                  <select value={form.useCase} onChange={(event) => updateField('useCase', event.target.value)} className="rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary">
                    <option value="">Not sure yet</option>
                    <option value="Answering common questions">Answering common questions</option>
                    <option value="Appointments or bookings">Appointments or bookings</option>
                    <option value="Orders and product questions">Orders and product questions</option>
                    <option value="Capturing enquiries for follow-up">Capturing enquiries for follow-up</option>
                    <option value="Customer support">Customer support</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-heading">
                What should the AI agent handle?
                <textarea
                  value={form.details}
                  onChange={(event) => updateField('details', event.target.value)}
                  className="min-h-28 rounded border border-border bg-background px-3 py-3 font-sans text-sm outline-none focus:border-primary"
                  placeholder="Support calls, bookings, after-hours calls, language needs..."
                />
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="site-button w-full px-8 py-3.5 sm:w-auto"
                >
                  Send via WhatsApp
                </button>
                <a
                  href="#pricing"
                  className="w-full rounded-lg border border-secondary/20 px-8 py-3.5 text-center font-semibold text-secondary transition-colors hover:bg-secondary/5 sm:w-auto"
                >
                  Estimate usage
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
