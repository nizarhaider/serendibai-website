'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '#platform', label: 'Platform' },
  { href: '#use-cases', label: 'Use cases' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08110f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="SerendibAI home">
          <span className="brand-mark">S</span>
          <span className="text-[17px] font-semibold tracking-[-0.03em] text-white">SerendibAI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden items-center gap-2 rounded-full bg-[#69e0c1] px-5 py-2.5 text-sm font-semibold text-[#0b1714] transition-transform hover:-translate-y-0.5 sm:flex">
            Book a demo
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="border-t border-white/10 bg-[#08110f] px-5 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-3 text-base text-white/75 hover:bg-white/5 hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-3 rounded-full bg-[#69e0c1] px-5 py-3 text-center text-sm font-semibold text-[#0b1714]">
              Book a demo
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
