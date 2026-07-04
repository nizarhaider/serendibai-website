import Header from '@/components/header'
import Hero from '@/components/hero'
import ConversationDemo from '@/components/conversation-demo'
import Features from '@/components/features'
import ArchitectureSection from '@/components/architecture-section'
import PricingCalculator from '@/components/pricing-calculator'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import WhatsAppFloatingButton from '@/components/whatsapp-floating-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ConversationDemo />
      <section id="use-cases">
        <Features />
      </section>
      <ArchitectureSection />
      <section id="pricing">
        <PricingCalculator />
      </section>
      <CTASection />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  )
}
