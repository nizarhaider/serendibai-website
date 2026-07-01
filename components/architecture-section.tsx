import { Building2, Database, LockKeyhole, PhoneCall, ServerCog, ShieldCheck, Workflow } from 'lucide-react'

const architecturePoints = [
  {
    icon: ServerCog,
    title: 'Fully in-house',
    description:
      'The voice layer, language logic, and orchestration are built and operated by SerendibAI.',
  },
  {
    icon: LockKeyhole,
    title: 'Privately hosted',
    description:
      'Customer conversations run through a private hosted environment, not a patchwork of exposed tools.',
  },
  {
    icon: Database,
    title: 'Business controlled',
    description:
      'Integrations connect to your workflows while keeping conversation handling deliberate and contained.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    description:
      'Architecture choices prioritize confidential customer calls and operational visibility.',
  },
]

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-sm font-heading tracking-widest text-accent uppercase mb-4">
            Architecture
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading mb-5 leading-tight">
            In-house, hosted, and private for every conversation
          </h2>
          <p className="text-base sm:text-lg text-secondary-foreground/80 leading-relaxed mb-8">
            SerendibAI is designed as a private voice AI stack for Sri Lankan
            businesses. Calls flow through our hosted voice layer, in-house
            language intelligence, and your business systems without exposing
            sensitive conversations as an afterthought.
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
                  <p className="text-sm text-secondary-foreground/70">Voice enters the private stack</p>
                </div>
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-primary/50" aria-hidden="true"></div>

            <div className="rounded-lg border border-primary/30 bg-primary/10 p-5">
              <div className="flex items-center gap-3 mb-4">
                <ServerCog className="h-6 w-6 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-heading text-lg">SerendibAI private core</p>
                  <p className="text-sm text-secondary-foreground/70">
                    Hosted voice layer and in-house language intelligence
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
                  Context
                </div>
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-primary/50" aria-hidden="true"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-white/10 bg-secondary/70 p-4">
                <Workflow className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-heading">Workflow</p>
                <p className="text-sm text-secondary-foreground/70">Routing and actions</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-secondary/70 p-4">
                <Database className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-heading">Data</p>
                <p className="text-sm text-secondary-foreground/70">Controlled records</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-secondary/70 p-4">
                <Building2 className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-heading">Business</p>
                <p className="text-sm text-secondary-foreground/70">CRM and teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
