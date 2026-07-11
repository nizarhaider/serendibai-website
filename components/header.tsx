'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Product', href: '#platform', menu: true },
  { label: 'Pricing', href: '#pricing' },
  { label: 'For Business', href: '#use-cases', menu: true },
  { label: 'For Developers', href: '#platform', menu: true },
  { label: 'Resources', href: '#how-it-works', menu: true },
  { label: 'Company', href: '#contact', menu: true },
]

function BrandDots() {
  return <span className="brand-dots" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <span key={index} />)}</span>
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-2 sm:px-8 lg:px-12">
      <div className="mx-auto flex h-[62px] max-w-[1160px] items-center justify-between rounded-xl bg-white/92 px-4 shadow-[0_10px_35px_rgba(10,29,58,.04)] backdrop-blur-xl sm:px-5">
        <Link href="/" className="flex items-center gap-2 text-[#0a1d3a]" aria-label="SerendibAI home">
          <BrandDots />
          <span className="text-[19px] font-semibold tracking-[-.05em]">SerendibAI</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="inline-flex items-center gap-1.5 text-[13px] text-[#172136] transition-colors hover:text-[#315fff]">
              {item.label}
              {item.menu ? <ChevronDown className="h-3 w-3" aria-hidden="true" /> : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 sm:flex">
          <Link href="#contact" className="rounded-lg bg-[#f4f5fa] px-4 py-2.5 text-xs font-medium text-[#0a1d3a]">Login</Link>
          <Link href="#contact" className="rounded-lg bg-[#f4f5fa] px-4 py-2.5 text-xs font-medium text-[#0a1d3a]">Contact Sales</Link>
          <Link href="#contact" className="rounded-lg bg-[#071b3a] px-4 py-2.5 text-xs font-semibold text-white">Try For Free</Link>
        </div>

        <button type="button" className="grid h-10 w-10 place-items-center rounded-lg bg-[#f4f5fa] text-[#0a1d3a] lg:hidden" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label={isOpen ? 'Close navigation' : 'Open navigation'}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="mx-auto mt-2 grid max-w-[1160px] gap-1 rounded-xl bg-white p-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm text-[#172136] hover:bg-[#f4f5fa]">{item.label}</Link>)}
          <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-lg bg-[#071b3a] px-4 py-3 text-center text-sm font-semibold text-white">Try For Free</Link>
        </nav>
      ) : null}
    </header>
  )
}
