import Link from 'next/link'

const columns = [
  { title: 'Product', links: [['Platform', '#platform'], ['Use cases', '#use-cases'], ['Pricing', '#pricing']] },
  { title: 'Resources', links: [['How it works', '#how-it-works'], ['Languages', '#how-it-works'], ['Book a demo', '#contact']] },
  { title: 'Company', links: [['Contact', '#contact'], ['For business', '#use-cases'], ['Dashboard', '#contact']] },
]

export default function Footer() {
  return (
    <footer className="bg-[#071b3a] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-[1.2fr_1.8fr]">
          <div><div className="flex items-center gap-2"><span className="brand-dots">{Array.from({ length: 9 }, (_, index) => <span key={index} />)}</span><span className="text-xl font-semibold tracking-[-.05em]">SerendibAI</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-white/58">Managed multilingual AI call center agents for Sri Lankan businesses.</p></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{columns.map((column) => <div key={column.title}><h3 className="text-xs uppercase tracking-wider text-white/45">{column.title}</h3><ul className="mt-5 space-y-3">{column.links.map(([label, href]) => <li key={label}><Link href={href} className="text-sm text-white/72 hover:text-white">{label}</Link></li>)}</ul></div>)}</div>
        </div>
        <div className="flex flex-col gap-3 pt-8 text-xs text-white/42 sm:flex-row sm:justify-between"><p>© 2026 SerendibAI. All rights reserved.</p><p>English, Sinhala, and Tamil voice agents.</p></div>
      </div>
    </footer>
  )
}
