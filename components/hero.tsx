import { ArrowUpRight, Star } from 'lucide-react'

const industries = ['Healthcare', 'Retail', 'Hospitality', 'Logistics', 'Services']

export default function Hero() {
  return (
    <section className="bg-white px-2 pb-8 pt-[72px] sm:px-4">
      <div className="retell-hero relative mx-auto flex min-h-[820px] max-w-[1424px] overflow-hidden rounded-[23px] px-6 py-16 text-white sm:px-12 lg:px-[132px]">
        <div className="relative z-10 flex w-full flex-col">
          <div className="mx-auto mt-28 text-center sm:mt-36">
            <p className="text-sm font-medium uppercase tracking-[-.02em]">#1 multilingual voice agent platform for Sri Lanka</p>
            <h1 className="display-serif mx-auto mt-14 max-w-[790px] text-balance text-6xl leading-[.98] sm:text-7xl lg:text-[90px]">
              Meet your AI call center from the future.
            </h1>
          </div>

          <div className="mt-auto flex flex-col gap-6 pb-1 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[360px]">
              <div className="mb-3 flex items-center gap-1 rounded bg-white/20 px-2 py-1 text-xs w-fit">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-3 w-3 fill-white" />)}
                <span className="ml-1">Built for local teams</span>
              </div>
              <p className="text-sm font-medium leading-5 text-white/92">Build, deploy, and manage AI voice agents that sound natural, execute tasks, and speak English, Sinhala, and Tamil.</p>
            </div>

            <a href="#contact" className="group flex w-full max-w-[246px] items-center justify-between rounded-xl bg-white/20 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/28">
              <span className="display-serif text-2xl leading-none">Try Our Live<br />Demo</span>
              <span className="grid h-[70px] w-[70px] place-items-center rounded-lg bg-white text-[#315fff] shadow-lg"><ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-x-8 gap-y-5 px-4 py-10 text-[#0a1d3a]">
        {industries.map((industry) => <span key={industry} className="text-xl font-semibold tracking-[-.045em] opacity-65 sm:text-2xl">{industry}</span>)}
      </div>
    </section>
  )
}
