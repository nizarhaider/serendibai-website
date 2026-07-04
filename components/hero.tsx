export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-16 h-px bg-primary/20"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-muted/25 to-muted/60"></div>
      </div>

      <div className="w-full min-w-0 max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-5 text-sm font-heading tracking-widest text-accent uppercase">
            AI call center agents for Sri Lankan businesses
          </p>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-heading text-foreground mb-5 sm:mb-6 leading-tight text-balance">
            <span className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
              <span>Answer every customer call in</span>
              <span className="language-rotator text-primary" aria-hidden="true">
                <span>English</span>
                <span>සිංහල</span>
                <span>தமிழ்</span>
              </span>
            </span>
            <span className="sr-only">English, Sinhala, or Tamil</span>
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground mb-9 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            SerendibAI provides managed AI voice agents for inbound calls,
            support questions, bookings, routing, and human handoff. We set up
            the full solution around your business, not a generic chatbot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-heading text-base"
            >
              Book a demo
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 font-heading text-base"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="mb-14 rounded-lg border border-border bg-card shadow-xl overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-border bg-secondary px-4 py-4 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary-foreground/65">
                Live inbound desk
              </p>
              <p className="font-heading text-lg">SerendibAI operator console</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs sm:w-72">
              <div className="rounded border border-white/10 bg-white/5 p-2">
                <span className="block font-heading text-primary">12</span>
                Active
              </div>
              <div className="rounded border border-white/10 bg-white/5 p-2">
                <span className="block font-heading text-primary">3</span>
                Languages
              </div>
              <div className="rounded border border-white/10 bg-white/5 p-2">
                <span className="block font-heading text-primary">4</span>
                Handoffs
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-border bg-muted/40 p-5 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-heading">Incoming call</p>
                  <p className="text-xs text-muted-foreground">Colombo retail customer</p>
                </div>
                <span className="rounded bg-primary/10 px-3 py-1 text-xs font-heading text-primary">
                  Sinhala
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="rounded border border-border bg-card p-3">
                  <p className="text-muted-foreground">Customer asks</p>
                  <p className="font-heading">Can I book a delivery for tomorrow?</p>
                </div>
                <div className="rounded border border-border bg-card p-3">
                  <p className="text-muted-foreground">Agent action</p>
                  <p className="font-heading">Checks availability and creates booking</p>
                </div>
                <div className="rounded border border-border bg-card p-3">
                  <p className="text-muted-foreground">Escalation rule</p>
                  <p className="font-heading">Transfer to team if payment issue appears</p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                {['English', 'සිංහල', 'தமிழ்'].map((language) => (
                  <span
                    key={language}
                    className={`rounded px-3 py-2 text-sm font-heading ${
                      language === 'සිංහල'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {language}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Answered calls
                  </p>
                  <p className="mt-2 text-3xl font-heading text-foreground">248</p>
                  <p className="text-sm text-muted-foreground">This week</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Bookings made
                  </p>
                  <p className="mt-2 text-3xl font-heading text-foreground">61</p>
                  <p className="text-sm text-muted-foreground">Sent to your team</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Human handoff
                  </p>
                  <p className="mt-2 text-3xl font-heading text-foreground">18</p>
                  <p className="text-sm text-muted-foreground">Only when needed</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-border bg-muted/35 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="font-heading">Call summary</p>
                  <span className="rounded bg-accent/10 px-3 py-1 text-xs font-heading text-accent">
                    Ready for follow-up
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Customer requested a Sinhala conversation, booked a delivery
                  for tomorrow morning, and asked for confirmation by SMS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-heading text-primary">3</div>
            <p className="text-muted-foreground">
              Call languages:{' '}
              <span className="text-foreground font-heading">
                Sinhala, Tamil, English
              </span>
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-heading text-primary">24/7</div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-heading">
                Calls answered
              </span>{' '}
              even after hours
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-heading text-primary">1</div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-heading">Managed setup</span>{' '}
              for each client
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
