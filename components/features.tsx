import { ArrowUpRight, CalendarCheck, Clock3, Headphones, Languages, MessageSquareText, Workflow } from 'lucide-react'

const features = [
  { icon: Languages, title: 'Multilingual support', description: 'Switch naturally between English, Sinhala, and Tamil based on the caller.' },
  { icon: CalendarCheck, title: 'Bookings that get done', description: 'Collect details, check availability, and confirm appointments during the call.' },
  { icon: MessageSquareText, title: 'Instant call intelligence', description: 'Give your team structured transcripts, summaries, outcomes, and follow-up notes.' },
  { icon: Headphones, title: 'Smart human handoff', description: 'Route important calls to the right person with the full conversation context.' },
  { icon: Workflow, title: 'Built around your rules', description: 'We map your scripts, actions, guardrails, tools, and escalation policy.' },
  { icon: Clock3, title: 'Always available', description: 'Keep answering when staff are busy, after-hours, or serving customers in person.' },
]

export default function Features() {
  return (
    <section className="bg-white px-5 py-24 text-[#10201c] sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><p className="eyebrow">From hello to resolved</p><h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.03] tracking-[-.055em] sm:text-6xl">More than an answer. A complete outcome.</h2></div><a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold">Design your call flow <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div>
        <div className="mt-14 grid border-l border-t border-[#dfe3de] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => { const Icon = feature.icon; return <article key={feature.title} className="group min-h-64 border-b border-r border-[#dfe3de] p-7 transition-colors hover:bg-[#f5f6f2] sm:p-9"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e2f7f0] text-[#11705c] transition-colors group-hover:bg-[#69e0c1]"><Icon className="h-5 w-5" /></span><span className="font-mono text-xs text-[#a0aaa6]">0{index + 1}</span></div><h3 className="mt-10 text-xl font-semibold tracking-[-.025em]">{feature.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[#66746f]">{feature.description}</p></article> })}
        </div>
      </div>
    </section>
  )
}
