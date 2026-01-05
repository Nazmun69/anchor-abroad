"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function VisaApplicationCTA() {
    return (
        <section className="bg-gradient-to-br from-accent/10 via-accent/5 to-background py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12 lg:p-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium">Free Initial Assessment</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                            Ready to Start Your Student Visa Journey?
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Complete our comprehensive visa application form and receive personalized feedback on your eligibility.
                            Our expert system analyzes your profile and provides actionable recommendations to strengthen your
                            application.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-background border border-border rounded-lg p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📝</span>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Fill Application</h3>
                                <p className="text-sm text-muted-foreground">
                                    Complete our multi-step form with your personal, academic, and financial details
                                </p>
                            </div>

                            <div className="bg-background border border-border rounded-lg p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🔍</span>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Get Assessment</h3>
                                <p className="text-sm text-muted-foreground">
                                    Receive instant feedback on your application strength and eligibility score
                                </p>
                            </div>

                            <div className="bg-background border border-border rounded-lg p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Get Guidance</h3>
                                <p className="text-sm text-muted-foreground">
                                    Follow personalized recommendations to improve your visa approval chances
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/visa-application">
                                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 w-full">
                                    Start Free Assessment
                                </Button>
                            </Link>
                            <a href="#booking">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-border text-foreground px-8 w-full bg-transparent"
                                >
                                    Talk to Expert First
                                </Button>
                            </a>
                        </div>

                        <p className="text-sm text-muted-foreground mt-6">
                            Takes only 10-15 minutes • No credit card required • Instant results
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
