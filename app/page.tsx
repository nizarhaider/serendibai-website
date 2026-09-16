import Header from '@/components/header'
import Hero from '@/components/hero'
import ConversationDemo from '@/components/conversation-demo'
import Features from '@/components/features'
import ArchitectureSection from '@/components/architecture-section'
import PricingCalculator from '@/components/pricing-calculator'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import CallDemo from '@/components/call-demo'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ConversationDemo />
      <CallDemo />
      <Features />
      <ArchitectureSection />
      <section id="pricing">
        <PricingCalculator />
      </section>
      <CTASection />
      <Footer />
    </main>
  )
}
