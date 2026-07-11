import { CalendarCheck, Database, Globe2, Languages, PhoneCall, Plus, ShieldCheck } from 'lucide-react'

const items = [
  ['Connect to WhatsApp calling', 'Use the number customers already know and trust.'],
  ['English, Sinhala, and Tamil', 'Serve every caller from one managed voice agent.'],
  ['Bookings and business actions', 'Connect calls to calendars, records, and staff workflows.'],
  ['Human handoff with context', 'Transfer complex calls with a transcript and clear summary.'],
]

export default function ArchitectureSection() {
  return (
    <section id="how-it-works" className="bg-white px-5 py-48 text-[#202331] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <p className="section-label">Highlights</p>
        <h2 className="editorial-title mt-12 max-w-[560px]">A Voice Stack Optimized for Local Reach, Reliability, and Results</h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div className="product-frame-soft relative min-h-[610px] overflow-hidden rounded-xl p-8 sm:p-12">
            <div className="mx-auto flex h-[540px] max-w-[310px] flex-col overflow-hidden rounded-[42px] border-[10px] border-[#121722] bg-white shadow-[0_45px_90px_rgba(10,29,58,.24)]">
              <div className="mx-auto mt-2 h-6 w-24 rounded-full bg-[#121722]" />
              <div className="px-5 pt-7 text-center"><p className="text-xs text-[#7d8594]">Incoming WhatsApp call</p><p className="mt-2 text-lg font-semibold">SerendibAI</p></div>
              <div className="mx-5 mt-7 rounded-2xl bg-[#f2f4fa] p-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#315fff] text-white"><PhoneCall className="h-4 w-4" /></span><div><p className="text-xs font-semibold">Front Desk Agent</p><p className="text-[9px] text-[#7c8594]">Sinhala detected</p></div></div></div>
              <div className="mx-5 mt-3 space-y-3">{[
                [Languages, 'Language selected', 'සිංහල'],
                [CalendarCheck, 'Appointment found', 'Tomorrow · 10:30 AM'],
                [Database, 'Customer record', 'Ready to update'],
              ].map(([Icon, label, value]) => <div key={label} className="flex items-center gap-3 rounded-xl border p-3"><Icon className="h-4 w-4 text-[#315fff]" /><div><p className="text-[9px] text-[#7c8594]">{label}</p><p className="text-[10px] font-medium">{value}</p></div></div>)}</div>
              <button type="button" className="mx-5 mt-auto mb-5 rounded-xl bg-[#071b3a] py-3 text-xs font-semibold text-white">Answer with AI</button>
            </div>
          </div>

          <div>
            {items.map(([title, description], index) => <div key={title} className="border-b py-7 first:border-t"><div className="flex items-center justify-between gap-6"><h3 className={`text-xl leading-6 ${index === 0 ? 'text-[#315fff]' : ''}`}>{title}</h3>{index === 0 ? <span className="text-2xl">−</span> : <Plus className="h-5 w-5" />}</div>{index === 0 ? <p className="mt-6 max-w-[430px] text-sm leading-6">{description}</p> : null}</div>)}
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#f3f4f9] p-5"><Globe2 className="h-5 w-5 text-[#315fff]" /><p className="mt-6 text-sm font-medium">Managed locally</p></div>
              <div className="rounded-xl bg-[#f3f4f9] p-5"><ShieldCheck className="h-5 w-5 text-[#315fff]" /><p className="mt-6 text-sm font-medium">Guardrails included</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
