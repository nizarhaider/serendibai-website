import { Bot, ChevronLeft, Circle, GitBranch, MessageSquareText, PhoneForwarded, Plus, Settings2, Sparkles, Wrench } from 'lucide-react'

const nodes = [
  { icon: MessageSquareText, label: 'Conversation' },
  { icon: Wrench, label: 'Function' },
  { icon: PhoneForwarded, label: 'Call Transfer' },
  { icon: GitBranch, label: 'Logic Split Node' },
]

function BuilderWindow() {
  return (
    <div className="ui-window overflow-hidden rounded-xl bg-[#f7f8fb] text-[#172136]">
      <div className="flex h-11 items-center justify-between border-b bg-white px-3">
        <div className="flex items-center gap-2"><ChevronLeft className="h-3.5 w-3.5" /><Bot className="h-4 w-4 text-[#315fff]" /><span className="text-[11px] font-medium">Front Desk Conversation Flow</span></div>
        <button type="button" className="rounded bg-[#071b3a] px-3 py-1.5 text-[9px] font-semibold text-white">Publish</button>
      </div>
      <div className="grid min-h-[360px] grid-cols-[110px_1fr_178px] sm:min-h-[430px] sm:grid-cols-[145px_1fr_215px]">
        <aside className="border-r bg-white p-3">
          <p className="mb-3 text-[8px] font-medium uppercase tracking-wider text-[#8790a0]">Nodes</p>
          <div className="space-y-1.5">{nodes.map((node, index) => { const Icon = node.icon; return <div key={node.label} className={`flex items-center gap-2 rounded px-2 py-2 text-[9px] ${index === 1 ? 'bg-[#eef1ff] text-[#315fff]' : 'text-[#5d6675]'}`}><Icon className="h-3 w-3" />{node.label}</div> })}</div>
        </aside>
        <div className="relative overflow-hidden bg-[radial-gradient(#cfd4df_1px,transparent_1px)] bg-[size:18px_18px] p-5">
          <div className="absolute left-[12%] top-[12%] rounded-lg border bg-white p-3 shadow-sm"><p className="text-[8px] text-[#8991a0]">Start</p><p className="mt-1 text-[10px] font-medium">Welcome caller</p></div>
          <div className="absolute left-[39%] top-[42%] rounded-lg border-2 border-[#315fff] bg-white p-3 shadow-lg"><p className="text-[8px] text-[#315fff]">Function</p><p className="mt-1 text-[10px] font-medium">Check appointment</p></div>
          <div className="absolute bottom-[12%] right-[10%] rounded-lg border bg-white p-3 shadow-sm"><p className="text-[8px] text-[#8991a0]">Resolve</p><p className="mt-1 text-[10px] font-medium">Confirm booking</p></div>
          <span className="absolute left-[27%] top-[25%] h-px w-[25%] rotate-[24deg] bg-[#9ba5b6]" />
          <span className="absolute bottom-[29%] right-[25%] h-px w-[25%] rotate-[20deg] bg-[#9ba5b6]" />
        </div>
        <aside className="border-l bg-white p-3">
          <div className="flex items-center gap-2 border-b pb-3"><Settings2 className="h-3.5 w-3.5 text-[#315fff]" /><span className="text-[10px] font-semibold">Global Settings</span></div>
          <p className="mt-4 text-[8px] uppercase tracking-wider text-[#8a92a0]">Agent prompt</p>
          <div className="mt-2 rounded-lg border bg-[#fafbfc] p-2 text-[8px] leading-4 text-[#596273]">You are a friendly front desk agent. Help customers book appointments in their preferred language.</div>
          <div className="mt-3 space-y-2">{['Voice & language', 'Knowledge base', 'Speech settings'].map((item) => <div key={item} className="flex items-center justify-between border-b py-2 text-[8px]"><span>{item}</span><Plus className="h-3 w-3" /></div>)}</div>
        </aside>
      </div>
    </div>
  )
}

function NodeLibrary() {
  return (
    <div className="ui-window overflow-hidden rounded-xl bg-white text-[#172136]">
      <div className="flex h-11 items-center gap-2 border-b px-3"><Circle className="h-3 w-3 fill-[#315fff] text-[#315fff]" /><span className="text-[10px] font-semibold">Add a node</span></div>
      <div className="grid min-h-[360px] grid-cols-[120px_1fr] sm:min-h-[430px] sm:grid-cols-[145px_1fr]">
        <div className="border-r p-3"><p className="mb-3 text-[8px] uppercase tracking-wider text-[#8a92a0]">Components</p>{nodes.concat([{ icon: Sparkles, label: 'Extract Variable' }]).map((node, index) => { const Icon = node.icon; return <div key={node.label} className={`mb-1.5 flex items-center gap-2 rounded px-2 py-2 text-[9px] ${index === 1 ? 'bg-[#e7e9ef]' : ''}`}><Icon className="h-3 w-3 text-[#315fff]" />{node.label}</div> })}</div>
        <div className="bg-[#f8f9fb] p-5"><div className="rounded-lg border bg-white p-4"><p className="text-[9px] font-semibold">Function node</p><p className="mt-2 text-[8px] leading-4 text-[#687180]">Connect the agent to calendars, customer records, payments, and your internal tools.</p></div></div>
      </div>
    </div>
  )
}

export default function ConversationDemo() {
  return (
    <section id="platform" className="bg-white px-5 pb-36 pt-56 text-[#172136] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1160px]">
        <p className="section-label">Highlights</p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-end">
          <h2 className="editorial-title max-w-[560px]">Effortless to Use, Highly Configurable AI Phone Agent Platform</h2>
          <p className="max-w-[410px] text-base leading-6 lg:justify-self-end">Handle everything from routine requests to complex edge cases without trade-offs. Launch in weeks, not months.</p>
        </div>

        <div className="mt-20 grid gap-2 lg:grid-cols-[2fr_1fr]">
          <div className="product-frame overflow-hidden rounded-xl px-6 pt-16 sm:px-7"><BuilderWindow /></div>
          <div className="product-frame overflow-hidden rounded-xl px-6 pt-16 sm:px-7"><NodeLibrary /></div>
        </div>

        <div className="mt-14 grid gap-8 border-t pt-8 md:grid-cols-3">
          {[
            ['Highly configurable agentic framework', 'Build reliable call flows with clear guardrails and complete control.'],
            ['Real-time function calling', 'Book appointments, update records, and transfer calls during the conversation.'],
            ['Grounded business knowledge', 'Give accurate answers using the latest information from your business.'],
          ].map(([title, description]) => <article key={title}><h3 className="text-lg font-medium tracking-[-.03em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#596273]">{description}</p></article>)}
        </div>
      </div>
    </section>
  )
}
