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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-sm font-heading tracking-widest text-accent uppercase mb-4">
            Full solution setup
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading mb-5 leading-tight">
            We configure the agent around your business
          </h2>
          <p className="text-base sm:text-lg text-secondary-foreground/80 leading-relaxed mb-8">
            You do not need to build a call center system yourself. SerendibAI
            works with you to define the languages, scripts, booking steps,
            escalation rules, and reports your team needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architecturePoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <Icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-base mb-2">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground/75">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6 shadow-xl">
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-white/10 bg-secondary/70 p-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-heading">Customer call</p>
                  <p className="text-sm text-secondary-foreground/70">Inbound call reaches your AI agent</p>
                </div>
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-primary/50" aria-hidden="true"></div>

            <div className="rounded-lg border border-primary/30 bg-primary/10 p-5">
              <div className="flex items-center gap-3 mb-4">
                <ServerCog className="h-6 w-6 text-primary" aria-hidden="true" />
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

            <div className="mx-auto h-8 w-px bg-primary/50" aria-hidden="true"></div>

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
