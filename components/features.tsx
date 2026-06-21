export default function Features() {
  const features = [
    {
      title: 'Multilingual Mastery',
      description:
        'Native fluency in Sinhala, Tamil, and English with cultural context and local idioms.',
      icon: '🗣️',
    },
    {
      title: 'Call Center Ready',
      description:
        'Handle customer service, support inquiries, and appointment scheduling seamlessly.',
      icon: '📞',
    },
    {
      title: 'Real-time Analytics',
      description:
        'Track call volumes, duration, sentiment analysis, and agent performance metrics.',
      icon: '📊',
    },
    {
      title: 'Smart Integration',
      description:
        'Connect with your existing CRM, helpdesk, and business systems via APIs.',
      icon: '🔗',
    },
    {
      title: 'Enterprise Security',
      description:
        'GDPR compliant, encrypted conversations, and secure data handling for your customers.',
      icon: '🔒',
    },
    {
      title: 'Scalable Infrastructure',
      description:
        'From 10 concurrent calls to 1000+. Scale up as your business grows.',
      icon: '⚡',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
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
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors hover:shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-heading text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
