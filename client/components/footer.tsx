"use client"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">AA</span>
              </div>
              <span className="font-semibold">Anchor Abroad</span>
            </div>
            <p className="text-sm text-background/70">
              Expert visa guidance for work, study, and family reunification. Your trusted partner in global mobility.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Book Consultation
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 Anchor Abroad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
