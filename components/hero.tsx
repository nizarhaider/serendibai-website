export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Badge */}
        <div className="mb-8 inline-block">
          <div className="text-sm font-heading tracking-widest text-accent uppercase">
            Sri Lanka's Voice AI
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading text-foreground mb-6 leading-tight">
          Conversations that{' '}
          <span className="text-primary">understand your culture</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          AI-powered voice agents fluent in Sinhala, Tamil, and English. Handle
          customer calls, support inquiries, and appointment scheduling with
          intelligence built for Sri Lankan businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-heading text-base">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary/5 transition-colors font-heading text-base">
            View Demo
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="space-y-2">
            <div className="text-3xl font-heading text-primary">3</div>
            <p className="text-muted-foreground">
              Languages:{' '}
              <span className="text-foreground font-heading">
                Sinhala, Tamil, English
              </span>
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-heading text-primary">24/7</div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-heading">
                Always Available
              </span>{' '}
              for your customers
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-heading text-primary">99.9%</div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-heading">Uptime SLA</span>{' '}
              reliability
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
