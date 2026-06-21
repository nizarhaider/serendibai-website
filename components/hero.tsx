'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Logo/Badge */}
        <div className={`mb-8 inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-sm font-heading tracking-widest text-accent uppercase">
            Sri Lanka's Voice AI
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-heading text-foreground mb-6 leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Conversations that{' '}
          <span className="text-primary">understand your culture</span>
        </h1>

        {/* Subheading */}
        <p className={`text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          AI-powered voice agents fluent in Sinhala, Tamil, and English. Handle
          customer calls, support inquiries, and appointment scheduling with
          intelligence built for Sri Lankan businesses.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-heading text-base">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 font-heading text-base">
            View Demo
          </button>
        </div>

        {/* Hero Image */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl border border-border/30">
            <Image
              src="/hero-voice-waves.png"
              alt="Voice AI Technology"
              fill
              className="object-cover"
              priority
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
