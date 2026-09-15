import { ArrowUpRight } from 'lucide-react'

const groups = [
  ['Set your agent up', [['A clear brief', 'Describe your business, the questions to answer, and when your team should step in.'], ['Language settings', 'Configure English, Sinhala, and Tamil for your customers.'], ['Try it before launch', 'Review the conversation and refine your instructions.']]],
  ['Teach it your business', [['Documents you already have', 'Bring your service menus, FAQs, and business information.'], ['Product catalogue', 'Keep products and prices organised in your workspace.'], ['Easy updates', 'Keep the information your agent uses up to date.']]],
  ['See what happened', [['Recordings and transcripts', 'Go back to what the caller said and how the agent responded.'], ['Call activity', 'Review recent calls and track activity over time.'], ['Usage in one place', 'See the minutes and resources your agents use.']]],
] as const

export default function Features() {
  return <section id="features" className="bg-muted/60"><div className="site-section py-20 sm:py-24"><p className="section-label">Your workspace</p><div className="mt-3 flex flex-wrap items-end justify-between gap-6"><h2 className="editorial-title max-w-2xl">Everything you need to run the conversation.</h2><a href="https://portal.serendibai.lk/login" className="site-button">Open the portal <ArrowUpRight size={16} /></a></div><div className="mt-12 grid gap-8 md:grid-cols-3">{groups.map(([title, items]) => <article key={title}><h3 className="border-b pb-4 text-xl">{title}</h3><div className="mt-5 space-y-6">{items.map(([name, text]) => <div key={name}><h4 className="text-sm font-semibold">{name}</h4><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></article>)}</div></div></section>
}
