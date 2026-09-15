import { Check, Clock, PhoneCall, Radio } from 'lucide-react'

const conversation = [
  ['Caller', 'හෙලෝ, මට විස්තර ටිකක් දැනගන්න පුළුවන්ද?', 'Sinhala'],
  ['Serendib', 'ආයුබෝවන්! ඔව්, ඔබට කොහොමද උදව් කරන්න පුළුවන්?', ''],
  ['Caller', 'Can we continue in English?', 'Switches to English'],
  ['Serendib', 'Of course. What would you like to know about our services?', ''],
  ['Caller', 'I’d like to speak to someone about a booking.', ''],
  ['Serendib', 'Certainly. Let me take your details so the team can help.', ''],
]

export default function Hero() {
  return (
    <>
      <section className="hero-surface text-white">
        <div className="site-section grid items-center gap-12 py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
          <div>
            <div className="mb-7 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-[#a8c2be]"><span className="flex gap-1"><span className="language-chip">EN</span><span className="language-chip" lang="si">සිං</span><span className="language-chip" lang="ta">த</span></span>Three languages. One agent.</div>
            <h1 className="text-balance text-[42px] leading-[1.05] tracking-[-.04em] sm:text-[56px]">Your business never misses another conversation.</h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#a8c2be]">Give your customers a helpful voice on WhatsApp, in English, Sinhala, and Tamil. SerendibAI answers questions, captures enquiries, and keeps your team connected to every call.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="site-button brass"><PhoneCall size={17} />Book a live demo</a><a href="https://portal.serendibai.lk/login" className="site-button ghost">Open your workspace</a></div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#a8c2be]">{['Built in Sri Lanka', 'Your business knowledge', 'Managed setup'].map(t => <span key={t} className="flex items-center gap-2"><Check size={14} />{t}</span>)}</div>
          </div>
          <div className="overflow-hidden rounded-[18px] border border-white/15 bg-white/5">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4 text-xs text-[#a8c2be]"><span className="h-2 w-2 rounded-full bg-[#75ce91]" /><strong className="text-white">WhatsApp voice call</strong><span className="ml-auto flex items-center gap-1"><Clock size={13} />After hours</span></div>
            <div className="py-3">{conversation.map(([who, text, note], i) => <div key={i} className="flex gap-4 px-5 py-3"><span className={`w-12 shrink-0 pt-1 text-[11px] font-semibold ${who === 'Serendib' ? 'text-[#e8b65c]' : 'text-[#9fbab6]'}`}>{who}</span><div className="text-sm leading-relaxed text-[#e4eeec]"><p lang={i < 2 ? 'si' : 'en'}>{text}</p>{note && <p className="mt-1 text-[11px] text-[#9fbab6]">{note}</p>}</div></div>)}</div>
            <div className="mx-4 mb-4 flex items-center gap-3 rounded-xl border border-[#e8b65c]/25 bg-[#c08a2e]/15 px-4 py-3 text-xs"><Radio size={17} className="text-[#e8b65c]" /><span>One conversation, across languages.</span></div>
            <div className="border-t border-white/10 px-5 py-3 text-right text-[11px] text-[#9fbab6]">Illustrative conversation</div>
          </div>
        </div>
      </section>
      <div className="border-b bg-muted/50"><div className="site-section flex flex-wrap items-center justify-between gap-5 py-7"><span className="text-xs text-muted-foreground">Built for the businesses people call every day</span>{['Healthcare', 'Hospitality', 'Retail', 'Services'].map(t => <span key={t} className="text-base font-semibold text-primary/70">{t}</span>)}</div></div>
    </>
  )
}
