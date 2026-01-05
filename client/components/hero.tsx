"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits")
    benefitsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">Expert Visa Guidance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Navigate Your Visa Journey with Confidence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get 1-on-1 personalized visa counseling from a certified immigration advisor. Whether you're applying for
              a student, work, or visitor visa, we'll help you avoid common pitfalls, prepare flawless documentation,
              and increase your approval chances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/visa-application">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base w-full">
                  Start Your Application
                </Button>
              </Link>
              <Button
                onClick={handleBookSession}
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Book Consultation
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">500+</p>
                <p className="text-muted-foreground">Successful Visa Applicants</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">4.9/5</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/grad-student.jpg" alt="Graduate Student" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
