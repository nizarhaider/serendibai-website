import { Building2, Database, LockKeyhole, PhoneCall, ServerCog, ShieldCheck, Workflow } from 'lucide-react'

const architecturePoints = [
  {
    icon: ServerCog,
    title: 'Call flow design',
    description:
      'We map how your calls should be answered, qualified, booked, escalated, and reported.',
  },
  {
    icon: LockKeyhole,
    title: 'Managed voice stack',
    description:
      'SerendibAI hosts and operates the voice agent, language logic, and call handling workflow.',
  },
  {
    icon: Database,
    title: 'Business records',
    description:
      'Call outcomes can be sent to the systems your team already uses for follow-up.',
  },
  {
    icon: ShieldCheck,
    title: 'Human escalation',
    description:
      'Important calls can be transferred or flagged so your staff can step in with context.',
  },
]

export default function ArchitectureSection() {
  return (
    <section className="bg-[#0b1714] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[.2em] text-[#69e0c1] uppercase mb-5">
            Managed from end to end
          </p>
          <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-6xl mb-6 leading-[1.03]">
            Your operation. Your rules. Your voice agent.
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8 mb-10">
            You do not need to build a call center system yourself. SerendibAI
            works with you to define the languages, scripts, booking steps,
            escalation rules, and reports your team needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architecturePoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
                  <Icon className="mb-4 h-5 w-5 text-[#69e0c1]" aria-hidden="true" />
                  <h3 className="text-base font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm leading-6 text-white/48">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[.045] p-5 shadow-[0_36px_100px_rgba(0,0,0,.28)] sm:p-7">
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[#69e0c1]" aria-hidden="true" />
                <div>
                  <p className="font-heading">Customer call</p>
                  <p className="text-sm text-secondary-foreground/70">Inbound call reaches your AI agent</p>
                </div>
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-[#69e0c1]/50" aria-hidden="true"></div>

            <div className="rounded-2xl border border-[#69e0c1]/30 bg-[#69e0c1]/8 p-5">
              <div className="flex items-center gap-3 mb-4">
                <ServerCog className="h-6 w-6 text-[#69e0c1]" aria-hidden="true" />
                <div>
                  <p className="font-heading text-lg">SerendibAI managed agent</p>
                  <p className="text-sm text-secondary-foreground/70">
                    Language handling, call workflow, and action logic
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  Sinhala
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  Tamil
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  English
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  Workflow
                </div>
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-[#69e0c1]/50" aria-hidden="true"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-white/10 bg-secondary/70 p-4">
                <Workflow className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-heading">Bookings</p>
                <p className="text-sm text-secondary-foreground/70">Appointments and requests</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-secondary/70 p-4">
                <Database className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-heading">Reports</p>
                <p className="text-sm text-secondary-foreground/70">Summaries and follow-up</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-secondary/70 p-4">
                <Building2 className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-heading">Team</p>
                <p className="text-sm text-secondary-foreground/70">Handoff when needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
