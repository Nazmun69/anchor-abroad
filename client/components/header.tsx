"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export function Header() {
  const [user, setUser] = useState<any>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }
    getUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase])

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">AA</span>
          </div>
          <span className="font-semibold text-foreground">Anchor Abroad</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            About
          </a>
          <a href="/#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">
            Benefits
          </a>
          <Link href="/visa-application" className="text-sm text-accent hover:text-accent/80 transition font-medium">
            Apply Now
          </Link>
          <a href="/#booking" className="text-sm text-muted-foreground hover:text-foreground transition">
            Book
          </a>
          <a href="/#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition">
            Testimonials
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Button asChild variant="outline">
              <Link href="/dashboard">
                <User className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link href="/auth/login">Login</Link>
            </Button>
          )}
        </div>

        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a
              href="/#about"
              className="text-sm text-muted-foreground hover:text-foreground transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#benefits"
              className="text-sm text-muted-foreground hover:text-foreground transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <Link
              href="/visa-application"
              className="text-sm text-accent hover:text-accent/80 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
            <a
              href="/#booking"
              className="text-sm text-muted-foreground hover:text-foreground transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book
            </a>
            <a
              href="/#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-4 border-t border-border">
              {user ? (
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
              ) : (
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
