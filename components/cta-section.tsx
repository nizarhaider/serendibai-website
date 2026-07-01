export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-secondary text-secondary-foreground rounded-lg p-8 sm:p-16 text-center border border-primary/20">
          <h2 className="text-4xl sm:text-5xl font-heading mb-6">
            Ready to transform your customer service?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Join businesses across Sri Lanka who are already using SerendibAI
            to handle thousands of calls with intelligence and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-heading">
              Start Your Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-secondary-foreground text-secondary-foreground rounded hover:bg-secondary-foreground/10 transition-colors font-heading">
              Schedule a Demo
            </button>
          </div>

          <p className="text-sm opacity-75 mt-10">
            No credit card required. Get started in 5 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
