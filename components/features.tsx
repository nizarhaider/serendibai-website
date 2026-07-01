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
      title: 'Multilingual Mastery',
      description:
        'Native fluency in Sinhala, Tamil, and English with cultural context and local idioms.',
      icon: MultilingualIcon,
    },
    {
      title: 'Call Center Ready',
      description:
        'Handle customer service, support inquiries, and appointment scheduling seamlessly.',
      icon: CallCenterIcon,
    },
    {
      title: 'Real-time Analytics',
      description:
        'Track call volumes, duration, sentiment analysis, and agent performance metrics.',
      icon: AnalyticsIcon,
    },
    {
      title: 'Smart Integration',
      description:
        'Connect with your existing CRM, helpdesk, and business systems via APIs.',
      icon: IntegrationIcon,
    },
    {
      title: 'Enterprise Security',
      description:
        'GDPR compliant, encrypted conversations, and secure data handling for your customers.',
      icon: SecurityIcon,
    },
    {
      title: 'Scalable Infrastructure',
      description:
        'From 10 concurrent calls to 1000+. Scale up as your business grows.',
      icon: ScalabilityIcon,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/55">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading text-foreground mb-4">
            Purpose-Built for Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Every feature designed with Sri Lankan businesses in mind. No
            unnecessary complexity, just what works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div
                key={idx}
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
