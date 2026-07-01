'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-heading text-lg">S</span>
            </div>
            <span className="font-heading text-lg text-foreground hidden sm:inline">
              SerendibAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Architecture
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline px-6 py-2 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-heading">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded hover:bg-muted"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link
              href="#features"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Pricing
            </Link>
            <Link
              href="#architecture"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Architecture
            </Link>
            <button className="w-full px-6 py-2 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-heading">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
