import { BarChart3, CheckCircle2, ChevronRight, Headphones, MessageSquareText, Plus } from 'lucide-react'

const bars = [42, 64, 50, 78, 57, 86, 69, 91, 74, 83, 67, 94]

export default function Features() {
  return (
    <section className="bg-white px-5 py-48 text-[#202331] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="editorial-title max-w-[520px]">Consistently High Quality in Every AI Call, Continuously Improving</h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
          <div>
            <div className="border-y py-7">
              <div className="flex items-start justify-between gap-6"><h3 className="max-w-[370px] text-xl font-medium leading-6 text-[#315fff]">Comprehensive agent testing with built-in simulation testing</h3><span className="text-2xl">−</span></div>
              <p className="mt-6 max-w-[420px] text-sm leading-6">Test agents across real-world scenarios before launch, validating behavior, accuracy, and reliability at scale.</p>
            </div>
            {['Continuous QA across edge cases', 'Performance analytics built for business insight'].map((item) => <div key={item} className="flex items-center justify-between border-b py-7"><h3 className="max-w-[390px] text-xl leading-6">{item}</h3><Plus className="h-5 w-5" /></div>)}
          </div>

          <div className="product-frame-soft overflow-hidden rounded-xl p-12 pb-0 sm:p-16 sm:pb-0">
            <div className="ui-window rounded-xl bg-white p-5">
              <div className="flex items-center justify-between border-b pb-4"><div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-[#315fff]" /><span className="text-xs font-semibold">Agent quality dashboard</span></div><span className="rounded bg-[#071b3a] px-2 py-1 text-[9px] text-white">Last 30 days</span></div>
              <div className="mt-5 grid grid-cols-3 gap-3">{[['94%', 'Resolution'], ['0.8s', 'Latency'], ['4.8', 'Quality']].map(([value, label]) => <div key={label} className="rounded-lg bg-[#f5f6fa] p-3"><p className="text-xl font-semibold">{value}</p><p className="mt-1 text-[9px] text-[#788191]">{label}</p></div>)}</div>
              <div className="mt-6 flex h-32 items-end gap-2 border-b px-2">{bars.map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#315fff]" style={{ height: `${height}%`, opacity: .35 + index / 22 }} />)}</div>
              <div className="mt-5 space-y-2">{['Appointments booked correctly', 'Language selected automatically', 'Escalations included full context'].map((item) => <div key={item} className="flex items-center gap-2 rounded-lg border p-3 text-[10px]"><CheckCircle2 className="h-3.5 w-3.5 text-[#315fff]" />{item}<ChevronRight className="ml-auto h-3.5 w-3.5" /></div>)}</div>
            </div>
          </div>
        </div>

        <div className="mt-52 text-center">
          <p className="display-serif text-7xl text-[#202331] sm:text-9xl">Talks</p>
          <div className="mx-auto my-6 grid h-20 w-20 place-items-center rounded-full bg-[#f1f2f8]"><Headphones className="h-7 w-7 text-[#315fff]" /></div>
          <p className="display-serif text-7xl text-[#202331] sm:text-9xl">Like People</p>
          <p className="mx-auto mt-8 max-w-lg text-base leading-7 text-[#596273]">Natural turn-taking, low latency, and multilingual understanding make every call feel considered—not automated.</p>
          <MessageSquareText className="mx-auto mt-8 h-6 w-6 text-[#315fff]" />
        </div>
      </div>
    </section>
  )
}
