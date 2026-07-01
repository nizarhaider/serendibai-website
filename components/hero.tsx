'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-16 h-px bg-primary/20"></div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-muted/40"></div>
      </div>

      <div className="w-full min-w-0 max-w-5xl mx-auto text-center relative z-10">
        {/* Logo/Badge */}
        <div className={`mb-6 sm:mb-8 inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-sm font-heading tracking-widest text-accent uppercase">
            Sri Lanka's Voice AI
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-3xl sm:text-6xl lg:text-7xl font-heading text-foreground mb-5 sm:mb-6 leading-tight text-balance transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Conversations that{' '}
          <span className="block sm:inline text-primary">understand your culture</span>
        </h1>

        {/* Subheading */}
        <p className={`text-base sm:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          AI-powered voice agents fluent in Sinhala, Tamil, and English. Handle
          customer calls, support inquiries, and appointment scheduling with
          intelligence built for Sri Lankan businesses.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-heading text-base">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 font-heading text-base">
            View Demo
          </button>
        </div>

        {/* Hero Image */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative h-48 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl border border-border/30">
            <Image
              src="/serendibai-real-call-center.webp"
              alt="Customer support team working with headsets in an office"
              fill
              className="object-cover object-center"
              style={{
                objectPosition: 'center 48%'
              }}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
