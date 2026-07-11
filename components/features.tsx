import { BarChart3, CheckCircle2, ChevronRight, Headphones, MessageSquareText } from 'lucide-react'

const bars = [42, 64, 50, 78, 57, 86, 69, 91, 74, 83, 67, 94]

const qualityFeatures = [
  {
    title: 'Comprehensive agent testing with built-in simulation testing',
    description: 'Test agents across real-world scenarios before launch, validating behavior, accuracy, and reliability at scale.',
  },
  {
    title: 'Continuous QA across edge cases',
    description: 'Review completed conversations, find recurring failure patterns, and improve agent behaviour with clear evidence.',
  },
  {
    title: 'Performance analytics built for business insight',
    description: 'Track call outcomes, resolution, response time, handoffs, and the metrics that matter to your operation.',
  },
]

const voiceBars = [18, 34, 50, 72, 44, 82, 56, 38, 68, 88, 48, 30, 62, 42, 22]

export default function Features() {
  return (
    <section className="bg-white px-5 py-28 text-[#202331] sm:px-8 sm:py-40 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="editorial-title max-w-[520px]">Consistently High Quality in Every AI Call, Continuously Improving</h2>

        <div className="mt-12 grid gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-[.86fr_1.14fr] lg:items-start lg:gap-16">
          <div className="min-w-0 border-t">
            {qualityFeatures.map((feature, index) => (
              <details key={feature.title} className="group border-b" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 marker:hidden sm:gap-6 sm:py-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="min-w-0 text-pretty text-lg font-medium leading-6 transition-colors group-open:text-[#315fff] sm:text-xl">{feature.title}</h3>
                  <span className="relative mt-0.5 h-5 w-5 shrink-0" aria-hidden="true"><span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-current" /><span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform group-open:rotate-90 group-open:opacity-0" /></span>
                </summary>
                <p className="max-w-[420px] pb-6 pr-8 text-sm leading-6 text-[#596273] sm:pb-7">{feature.description}</p>
              </details>
            ))}
          </div>

          <div className="product-frame-soft min-w-0 overflow-hidden rounded-xl p-4 pb-0 sm:p-10 sm:pb-0 lg:p-12 lg:pb-0 xl:p-16 xl:pb-0">
            <div className="ui-window min-w-0 rounded-xl bg-white p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4"><div className="flex min-w-0 items-center gap-2"><BarChart3 className="h-4 w-4 shrink-0 text-[#315fff]" /><span className="truncate text-xs font-semibold">Agent quality dashboard</span></div><span className="rounded bg-[#071b3a] px-2 py-1 text-[9px] text-white">Last 30 days</span></div>
              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">{[['94%', 'Resolution'], ['0.8s', 'Latency'], ['4.8', 'Quality']].map(([value, label]) => <div key={label} className="min-w-0 rounded-lg bg-[#f5f6fa] p-2.5 sm:p-3"><p className="text-lg font-semibold sm:text-xl">{value}</p><p className="mt-1 truncate text-[8px] text-[#788191] sm:text-[9px]">{label}</p></div>)}</div>
              <div className="mt-5 flex h-24 items-end gap-1 border-b px-1 sm:mt-6 sm:h-32 sm:gap-2 sm:px-2">{bars.map((height, index) => <span key={`${height}-${index}`} className="min-w-0 flex-1 rounded-t bg-[#315fff]" style={{ height: `${height}%`, opacity: .35 + index / 22 }} />)}</div>
              <div className="mt-4 space-y-2 sm:mt-5">{['Appointments booked correctly', 'Language selected automatically', 'Escalations included full context'].map((item) => <div key={item} className="flex min-w-0 items-center gap-2 rounded-lg border p-2.5 text-[9px] sm:p-3 sm:text-[10px]"><CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#315fff]" /><span className="min-w-0 flex-1 truncate">{item}</span><ChevronRight className="h-3.5 w-3.5 shrink-0" /></div>)}</div>
            </div>
          </div>
        </div>

        <div className="retell-hero relative mt-28 overflow-hidden rounded-2xl px-5 py-16 text-center text-white sm:mt-44 sm:px-10 sm:py-24 lg:mt-52 lg:min-h-[620px] lg:py-28">
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/72">Human-standard voice AI</p>
            <h2 className="display-serif mt-8 text-balance text-5xl leading-[.94] sm:mt-10 sm:text-7xl lg:text-[108px]">Talks like people.</h2>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-sm leading-6 text-white/74 sm:text-base sm:leading-7">Natural turn-taking, low latency, and multilingual understanding make every call feel considered—not automated.</p>

            <div className="mt-10 flex h-20 w-full max-w-md items-center justify-center gap-1 rounded-2xl border border-white/20 bg-white/10 px-5 backdrop-blur-sm sm:mt-14 sm:h-24 sm:gap-1.5">
              {voiceBars.map((height, index) => <span key={`${height}-${index}`} className="w-1 rounded-full bg-white sm:w-1.5" style={{ height: `${height}%`, opacity: .55 + index / 34 }} />)}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-white/78"><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">~600 ms response</span><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Natural turn-taking</span><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">3 languages</span></div>
            <div className="mt-9 flex items-center gap-3 text-sm font-medium"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#315fff]"><Headphones className="h-4 w-4" /></span><span>Listen. Understand. Respond.</span><MessageSquareText className="h-4 w-4 text-white/65" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
