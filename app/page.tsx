import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import PricingCalculator from '@/components/pricing-calculator'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <PricingCalculator />
      </section>
      <CTASection />
      <Footer />
    </main>
  )
}
