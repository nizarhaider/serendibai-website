'use client'

import { Menu, Radio, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [['What it does', '#platform'], ['Features', '#features'], ['Pricing', '#pricing']]
const socialItems = [
  ['Facebook · Serendib AI Solutions', 'https://www.facebook.com/p/Serendib-AI-Solutions-61595535185760/'],
  ['Instagram · @serendibai', 'https://www.instagram.com/serendibai/'],
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center gap-10 px-5 sm:px-7">
        <Link href="/" className="brand" aria-label="SerendibAI home"><span className="brand-mark"><Radio size={17} /></span>SerendibAI</Link>
        <nav className="hidden gap-6 lg:flex" aria-label="Main navigation">{navItems.map(([label, href]) => <a className="text-sm text-muted-foreground hover:text-primary" key={label} href={href}>{label}</a>)}</nav>
        <div className="ml-auto flex items-center gap-3"><div className="hidden items-center gap-3 lg:flex">{socialItems.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-primary">{label}</a>)}</div><a href="https://portal.serendibai.lk/login" className="text-sm font-semibold">Sign in</a><a href="#contact" className="site-button hidden sm:inline-flex">Book a demo</a><button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
      </div>
      {open && <nav className="grid gap-1 border-t px-5 py-3 lg:hidden" aria-label="Mobile navigation">{navItems.concat([['Book a demo', '#contact']]).map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-muted">{label}</a>)}{socialItems.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-3 text-muted-foreground hover:bg-muted hover:text-primary">{label}</a>)}</nav>}
    </header>
  )
}
