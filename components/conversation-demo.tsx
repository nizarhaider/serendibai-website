const messages = [
  {
    role: 'ai',
    text: 'Hi! Would you like to speak in English, සිංහල, or தமிழ்?',
    delay: '0ms',
  },
  {
    role: 'user',
    text: 'සිංහල',
    delay: '900ms',
  },
  {
    role: 'ai',
    text: 'හරි. ඔබට අද කොහොම උදව් කරන්නද?',
    delay: '1800ms',
  },
  {
    role: 'user',
    text: 'මට හෙට උදේ 10ට appointment එකක් දාගන්න පුළුවන්ද?',
    delay: '2700ms',
  },
  {
    role: 'ai',
    text: 'පුළුවන්. ඔබේ නම සහ දුරකථන අංකය කියන්න.',
    delay: '3600ms',
  },
]

export default function ConversationDemo() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-sm font-heading tracking-widest text-accent uppercase mb-4">
            Multilingual handoff
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading text-foreground mb-5 leading-tight">
            Meet customers in the language they choose
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            SerendibAI starts every call by letting customers choose English,
            Sinhala, or Tamil. Once they choose Sinhala, the agent continues in
            Sinhala while keeping the same business context.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-background p-4 sm:p-6 shadow-sm">
          <div className="mb-5 flex flex-wrap gap-2">
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

          <div className="space-y-3" aria-label="Animated Sinhala conversation preview">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`conversation-bubble flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
                style={{ animationDelay: message.delay }}
              >
                <p
                  className={`max-w-[88%] rounded-lg px-4 py-3 text-sm sm:text-base leading-relaxed shadow-sm ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}

            <div className="conversation-typing flex justify-start" aria-hidden="true">
              <div className="rounded-lg bg-muted px-4 py-3">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
