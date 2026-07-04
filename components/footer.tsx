import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-secondary font-heading text-lg">S</span>
              </div>
              <span className="font-heading text-lg">SerendibAI</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Managed AI call center agents for Sri Lankan businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading text-sm mb-4 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#how-it-works"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#use-cases"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Use cases
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Book a demo
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Languages
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-secondary-foreground/70">
          <p>&copy; 2026 SerendibAI. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">English, Sinhala, and Tamil inbound call agents.</p>
        </div>
      </div>
    </footer>
  )
}
