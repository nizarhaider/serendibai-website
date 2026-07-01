import Image from 'next/image'
import { Database, LockKeyhole, ServerCog, ShieldCheck } from 'lucide-react'

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

        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 shadow-xl">
          <Image
            src="/serendibai-private-architecture.webp"
            alt="Private in-house SerendibAI architecture visual"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}
