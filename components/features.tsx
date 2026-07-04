'use client'

import {
  MultilingualIcon,
  CallCenterIcon,
  AnalyticsIcon,
  IntegrationIcon,
  SecurityIcon,
  ScalabilityIcon,
} from './feature-icons'

export default function Features() {
  const features = [
    {
      title: 'Support questions',
      description:
        'Answer opening hours, service details, order questions, and common customer requests in three languages.',
      icon: MultilingualIcon,
    },
    {
      title: 'Bookings and appointments',
      description:
        'Capture names, phone numbers, preferred times, and booking notes before sending them to your team.',
      icon: CallCenterIcon,
    },
    {
      title: 'Call summaries',
      description:
        'Receive clear summaries of what the customer asked, what the agent did, and what needs follow-up.',
      icon: AnalyticsIcon,
    },
    {
      title: 'Business handoff',
      description:
        'Route urgent, complex, or payment-related calls to a human with the conversation context included.',
      icon: IntegrationIcon,
    },
    {
      title: 'Managed setup',
      description:
        'We configure your scripts, languages, call rules, reporting, and integrations around your business.',
      icon: SecurityIcon,
    },
    {
      title: 'After-hours coverage',
      description:
        'Keep answering inbound calls when your staff are busy, closed, or handling customers in person.',
      icon: ScalabilityIcon,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/55">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading text-foreground mb-4">
            What your AI call agent handles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            SerendibAI is built for practical inbound call handling: answer,
            book, summarize, route, and escalate when a real person is needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
