import { ArrowRight, Check, Clock3, Languages, PhoneCall, Sparkles } from 'lucide-react'

const waveform = [14, 25, 19, 38, 31, 52, 27, 44, 60, 35, 48, 23, 34, 18, 28, 12]

export default function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden bg-[#08110f] px-5 pb-20 pt-32 text-white sm:px-8 sm:pb-28 sm:pt-40 lg:px-12">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#69e0c1]/25 bg-[#69e0c1]/8 px-4 py-2 text-xs font-medium text-[#95f1d7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69e0c1] shadow-[0_0_12px_#69e0c1]" />
            Voice AI built for Sri Lankan businesses
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-7xl lg:text-[92px]">
            Your best call agent.
            <span className="block text-[#69e0c1]">Always on the line.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-7 text-white/62 sm:text-xl sm:leading-8">
            SerendibAI answers every customer call in English, Sinhala, or Tamil—then books, routes, summarises, and hands off with the care of your best team member.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#ff7a45] px-7 py-3.5 text-sm font-semibold text-[#16100d] transition-transform hover:-translate-y-0.5 sm:w-auto">
              Build your voice agent
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#platform" className="flex w-full items-center justify-center gap-2 rounded-full border border-white/18 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto">
              Explore the platform
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/45">
            {['Managed setup', 'Human handoff', 'No missed calls'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#69e0c1]" />{item}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">
          <div className="absolute -inset-8 rounded-[40px] bg-[#69e0c1]/8 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#101a18] shadow-[0_40px_120px_rgba(0,0,0,.5)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#69e0c1] text-[#08110f]"><PhoneCall className="h-4 w-4" /></span>
                <div><p className="text-sm font-medium">Front Desk Agent</p><p className="text-xs text-white/40">Colombo Care Clinic</p></div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#69e0c1]/20 bg-[#69e0c1]/8 px-3 py-1.5 text-xs text-[#8cebd1]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#69e0c1]" />Live call</div>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
              <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                  <div><p className="text-xs uppercase tracking-[.2em] text-white/35">Incoming via WhatsApp</p><p className="mt-1 text-lg font-medium">+94 77 120 8841</p></div>
                  <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-white/60"><Clock3 className="h-3.5 w-3.5" />02:14</div>
                </div>
                <div className="mb-7 flex h-20 items-center justify-center gap-1 rounded-2xl border border-white/8 bg-[#0b1412] px-5" aria-label="Live audio waveform">
                  {waveform.map((height, index) => <span key={`${height}-${index}`} className="w-1 rounded-full bg-[#69e0c1] opacity-80" style={{ height }} />)}
                </div>
                <div className="space-y-3">
                  <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-white/7 p-4 text-sm leading-6 text-white/72">මට හෙට උදේ appointment එකක් දාගන්න පුළුවන්ද?</div>
                  <div className="ml-auto max-w-[86%] rounded-2xl rounded-tr-sm bg-[#69e0c1] p-4 text-sm leading-6 text-[#0a1714]">පුළුවන්. උදේ 10:30 slot එක available. මම ඒක confirm කරන්නද?</div>
                </div>
              </div>

              <div className="bg-[#0d1614] p-5 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[.18em] text-white/35"><Sparkles className="h-3.5 w-3.5 text-[#ff7a45]" />Live intelligence</div>
                <div className="mt-5 space-y-3">
                  <div className="product-event"><span className="event-icon"><Languages className="h-4 w-4" /></span><div><p>Sinhala detected</p><span>Language switched automatically</span></div><Check className="ml-auto h-4 w-4 text-[#69e0c1]" /></div>
                  <div className="product-event"><span className="event-icon"><Clock3 className="h-4 w-4" /></span><div><p>Appointment found</p><span>Tomorrow · 10:30 AM</span></div><Check className="ml-auto h-4 w-4 text-[#69e0c1]" /></div>
                  <div className="product-event border-[#ff7a45]/25 bg-[#ff7a45]/6"><span className="event-icon text-[#ff9d77]"><Sparkles className="h-4 w-4" /></span><div><p>Booking ready</p><span>Waiting for customer confirmation</span></div><span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-[#ff7a45]" /></div>
                </div>
                <div className="mt-5 rounded-2xl border border-white/8 bg-white/[.035] p-4"><div className="flex items-center justify-between text-xs text-white/38"><span>Agent confidence</span><span className="font-mono text-[#69e0c1]">98.4%</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8"><div className="h-full w-[98%] rounded-full bg-gradient-to-r from-[#69e0c1] to-[#ff7a45]" /></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
