import { ArrowUpRight, Bot, CheckCircle2, FileText, GitBranch, Globe2, MessageSquareText, PhoneForwarded, Search, Wrench } from 'lucide-react'

const steps = [
  { icon: MessageSquareText, label: 'Welcome caller', detail: 'Greet and identify language' },
  { icon: Search, label: 'Understand intent', detail: 'Booking, support, or enquiry' },
  { icon: Wrench, label: 'Take action', detail: 'Check availability or records' },
  { icon: GitBranch, label: 'Resolve or hand off', detail: 'Complete the task with context' },
]

export default function ConversationDemo() {
  return (
    <section id="platform" className="bg-[#f3f4ef] px-5 py-24 text-[#10201c] sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Effortless to use. Built around you.</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">One platform for every customer conversation.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#52615d] lg:justify-self-end">We configure a reliable, multilingual call agent around your real operating rules—from the first hello to the final handoff.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <article className="overflow-hidden rounded-[28px] border border-[#cad0ca] bg-white shadow-[0_24px_80px_rgba(15,34,29,.08)]">
            <div className="flex items-center justify-between border-b border-[#e3e6e1] px-5 py-4 sm:px-7"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#10201c] text-white"><Bot className="h-4 w-4" /></span><div><p className="text-sm font-semibold">Front Desk Agent</p><p className="text-xs text-[#77827e]">Agent workflow</p></div></div><span className="rounded-full bg-[#e2f7f0] px-3 py-1.5 text-xs font-medium text-[#11705c]">Published</span></div>
            <div className="workflow-canvas p-5 sm:p-8">
              <div className="mx-auto max-w-xl space-y-3">
                {steps.map((step, index) => { const Icon = step.icon; return <div key={step.label}><div className={`flex items-center gap-4 rounded-2xl border p-4 ${index === 2 ? 'border-[#ff7a45]/50 bg-[#fff5ef] shadow-[0_12px_34px_rgba(255,122,69,.12)]' : 'border-[#d9ddd8] bg-white'}`}><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${index === 2 ? 'bg-[#ff7a45] text-[#20100a]' : 'bg-[#edf0eb] text-[#40514c]'}`}><Icon className="h-4 w-4" /></span><div><p className="text-sm font-semibold">{step.label}</p><p className="mt-1 text-xs text-[#6c7975]">{step.detail}</p></div><span className="ml-auto font-mono text-xs text-[#9ba4a1]">0{index + 1}</span></div>{index < steps.length - 1 ? <div className="mx-auto h-3 w-px bg-[#b8c0bb]" /> : null}</div> })}
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            <article className="rounded-[28px] bg-[#11231e] p-6 text-white sm:p-8">
              <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#69e0c1] text-[#10201c]"><Globe2 className="h-5 w-5" /></span><ArrowUpRight className="h-5 w-5 text-white/35" /></div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-.035em]">Natural in every language</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">Serve customers in English, Sinhala, and Tamil without separate queues or scripts.</p>
              <div className="mt-7 flex flex-wrap gap-2">{['English', 'සිංහල', 'தமிழ்'].map((language) => <span key={language} className="rounded-full border border-white/12 bg-white/5 px-3 py-2 text-xs text-white/72">{language}</span>)}</div>
            </article>
            <article className="rounded-[28px] border border-[#cad0ca] bg-[#e5f4ee] p-6 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#11705c]"><PhoneForwarded className="h-5 w-5" /></span>
              <h3 className="mt-7 text-2xl font-semibold tracking-[-.035em]">Human when it matters</h3>
              <p className="mt-3 text-sm leading-6 text-[#53635e]">Escalate urgent, sensitive, or complex calls with a clear summary already attached.</p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/75 p-3"><CheckCircle2 className="h-5 w-5 text-[#13836b]" /><div><p className="text-sm font-medium">Context attached</p><p className="text-xs text-[#70807b]">Transcript and caller intent</p></div><FileText className="ml-auto h-4 w-4 text-[#95a09c]" /></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
