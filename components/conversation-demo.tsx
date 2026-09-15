import { BookOpen, Headphones, MessagesSquare, Check } from 'lucide-react'

const services = [
  { icon: Headphones, title: 'A voice that answers', text: 'Help customers on WhatsApp calls with a voice agent that understands your business and speaks their language.', points: ['English, Sinhala, and Tamil', 'Natural back-and-forth conversations', 'Call recordings and transcripts'] },
  { icon: BookOpen, title: 'Your business, understood', text: 'Give your agent the information your team already uses, so callers get answers grounded in your business.', points: ['Upload business documents', 'Keep product information together', 'Update your agent as things change'] },
  { icon: MessagesSquare, title: 'Your team, in the loop', text: 'See what happened on every call and use that context to follow up with customers and improve your agent.', points: ['One workspace for your agents', 'Review conversations and outcomes', 'Track call activity and usage'] },
]

export default function ConversationDemo() {
  return <section id="platform" className="site-section py-20 sm:py-24"><p className="section-label">What it does</p><h2 className="editorial-title mt-3 max-w-2xl">A better answer to the everyday call.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">When your team is busy, the conversation can keep going. Give customers a place to ask, explain, and be heard.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{services.map(({icon: Icon, title, text, points}) => <article key={title} className="rounded-2xl border p-6"><span className="mb-6 inline-flex rounded-xl bg-muted p-3 text-primary"><Icon size={22} /></span><h3 className="text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><ul className="mt-6 space-y-3">{points.map(p => <li key={p} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-primary" />{p}</li>)}</ul></article>)}</div></section>
}
