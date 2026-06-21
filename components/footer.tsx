import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-secondary font-heading text-lg">S</span>
              </div>
              <span className="font-heading text-lg">SerendibAI</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              AI-powered voice agents for Sri Lankan businesses
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
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Demo
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
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
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
          <p>&copy; 2024 SerendibAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-secondary-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-secondary-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-secondary-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
