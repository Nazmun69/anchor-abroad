"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface AssessmentResult {
    eligibilityScore: number
    overallStatus: "strong" | "moderate" | "needs-improvement"
    strengths: string[]
    concerns: string[]
    recommendations: string[]
    nextSteps: string[]
    requiredDocuments: string[]
}

export default function AssessmentPage() {
    const router = useRouter()
    const [formData, setFormData] = useState<any>(null)
    const [assessment, setAssessment] = useState<AssessmentResult | null>(null)
    const [isAnalyzing, setIsAnalyzing] = useState(true)

    useEffect(() => {
        // Retrieve submitted data from localStorage
        const submissionData = localStorage.getItem("visaApplicationSubmission")

        if (!submissionData) {
            router.push("/visa-application")
            return
        }

        const data = JSON.parse(submissionData)
        setFormData(data)

        // Simulate analysis
        setTimeout(() => {
            const result = generateAssessment(data)
            setAssessment(result)
            setIsAnalyzing(false)
        }, 3000)
    }, [router])

    const generateAssessment = (data: any): AssessmentResult => {
        const strengths: string[] = []
        const concerns: string[] = []
        const recommendations: string[] = []
        const requiredDocuments: string[] = [
            "Valid passport (at least 6 months validity)",
            "Acceptance letter from university",
            "Financial proof documents",
            "Academic transcripts",
        ]

        let score = 50 // Base score

        // Analyze personal info completeness
        if (data.personalInfo.fullName && data.personalInfo.email && data.personalInfo.passportNumber) {
            score += 5
        }

        // Analyze education
        if (data.education.targetUniversity) {
            strengths.push("You have identified a target university")
            score += 10
        } else {
            concerns.push("No specific university selected yet")
            recommendations.push("Research and apply to universities matching your profile")
        }

        if (data.education.gpa && Number.parseFloat(data.education.gpa) >= 3.0) {
            strengths.push("Strong academic record")
            score += 10
        } else if (data.education.gpa && Number.parseFloat(data.education.gpa) < 3.0) {
            concerns.push("GPA below typical admission requirements")
            recommendations.push("Consider institutions with more flexible GPA requirements or take additional courses")
        }

        // Analyze test scores
        if (data.testScores.hasTestScores === "yes") {
            if (data.testScores.englishTest && data.testScores.englishScore) {
                const score_val = Number.parseFloat(data.testScores.englishScore)
                if (data.testScores.englishTest === "ielts" && score_val >= 6.5) {
                    strengths.push("Good English proficiency test scores")
                    score += 15
                } else if (data.testScores.englishTest === "toefl" && score_val >= 79) {
                    strengths.push("Good English proficiency test scores")
                    score += 15
                } else {
                    concerns.push("English test scores may need improvement")
                    recommendations.push("Consider retaking the English proficiency test to improve scores")
                }
                requiredDocuments.push(`${data.testScores.englishTest.toUpperCase()} score report`)
            }
        } else {
            concerns.push("No standardized test scores reported")
            recommendations.push("Take IELTS or TOEFL as soon as possible - scores are essential for visa application")
        }

        // Analyze financial situation
        const funds = Number.parseFloat(data.financial.availableFunds)
        if (funds >= 30000) {
            strengths.push("Strong financial backing")
            score += 15
        } else if (funds >= 15000) {
            strengths.push("Adequate financial resources")
            score += 8
        } else {
            concerns.push("Limited financial resources demonstrated")
            recommendations.push("Explore scholarship opportunities and consider education loans")
        }

        if (data.financial.fundingSource === "scholarship") {
            strengths.push("Scholarship funding is viewed favorably")
            score += 5
        }

        requiredDocuments.push("Bank statements (last 6 months)")
        if (data.financial.fundingSource === "parents" || data.financial.fundingSource === "mixed") {
            requiredDocuments.push("Sponsor's financial documents and affidavit of support")
        }

        // Analyze travel history
        if (data.travelHistory.hasPreviousVisa === "yes") {
            strengths.push("Previous visa experience strengthens your profile")
            score += 10
        }

        if (data.travelHistory.hasVisaRejection === "yes") {
            concerns.push("Previous visa rejection may require additional documentation")
            recommendations.push(
                "Prepare a detailed explanation letter addressing the previous rejection and how circumstances have changed",
            )
            score -= 10
        }

        // Determine overall status
        let overallStatus: "strong" | "moderate" | "needs-improvement"
        if (score >= 75) {
            overallStatus = "strong"
        } else if (score >= 50) {
            overallStatus = "moderate"
        } else {
            overallStatus = "needs-improvement"
        }

        const nextSteps = [
            "Book a consultation session with our visa expert for detailed guidance",
            "Begin gathering required documents listed below",
            "Research visa interview preparation resources",
            "Create a timeline for your application process",
        ]

        return {
            eligibilityScore: Math.min(score, 95),
            overallStatus,
            strengths,
            concerns,
            recommendations,
            nextSteps,
            requiredDocuments,
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "strong":
                return "text-green-600 dark:text-green-400"
            case "moderate":
                return "text-yellow-600 dark:text-yellow-400"
            case "needs-improvement":
                return "text-orange-600 dark:text-orange-400"
            default:
                return "text-muted-foreground"
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case "strong":
                return "Strong Application"
            case "moderate":
                return "Moderate Application"
            case "needs-improvement":
                return "Needs Improvement"
            default:
                return ""
        }
    }

    if (isAnalyzing) {
        return (
            <main className="min-h-screen bg-background">
                <Header />
                <section className="py-20 md:py-32">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-card border border-border rounded-xl p-12">
                            <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Analyzing Your Application</h2>
                            <p className="text-muted-foreground">Please wait while we review your information...</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }

    if (!assessment) return null

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                            Your Visa Assessment Results
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Based on the information you provided, here's our initial evaluation
                        </p>
                    </div>

                    {/* Eligibility Score Card */}
                    <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 p-8 mb-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-background border-8 border-accent mb-4">
                                <span className="text-4xl font-bold text-accent">{assessment.eligibilityScore}</span>
                            </div>
                            <h3 className={`text-2xl font-bold mb-2 ${getStatusColor(assessment.overallStatus)}`}>
                                {getStatusText(assessment.overallStatus)}
                            </h3>
                            <p className="text-muted-foreground">
                                {assessment.overallStatus === "strong" &&
                                    "Your profile shows strong potential for visa approval. Continue building on your strengths."}
                                {assessment.overallStatus === "moderate" &&
                                    "Your application has good foundation but could be strengthened in some areas."}
                                {assessment.overallStatus === "needs-improvement" &&
                                    "Your application needs significant work before submission. Follow our recommendations carefully."}
                            </p>
                        </div>
                    </Card>

                    {/* Strengths */}
                    {assessment.strengths.length > 0 && (
                        <Card className="border-green-200 dark:border-green-900 p-6 mb-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✓</span>
                                Your Strengths
                            </h3>
                            <ul className="space-y-2">
                                {assessment.strengths.map((strength, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                        <span className="text-muted-foreground">{strength}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}

                    {/* Concerns */}
                    {assessment.concerns.length > 0 && (
                        <Card className="border-orange-200 dark:border-orange-900 p-6 mb-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <span className="text-orange-600 dark:text-orange-400">⚠</span>
                                Areas of Concern
                            </h3>
                            <ul className="space-y-2">
                                {assessment.concerns.map((concern, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                                        <span className="text-muted-foreground">{concern}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}

                    {/* Recommendations */}
                    {assessment.recommendations.length > 0 && (
                        <Card className="border-accent/20 p-6 mb-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <span className="text-accent">→</span>
                                Our Recommendations
                            </h3>
                            <ul className="space-y-3">
                                {assessment.recommendations.map((recommendation, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-accent mt-1">{index + 1}.</span>
                                        <span className="text-muted-foreground">{recommendation}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}

                    {/* Required Documents */}
                    <Card className="border-border p-6 mb-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Required Documents Checklist</h3>
                        <ul className="space-y-2">
                            {assessment.requiredDocuments.map((doc, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <input type="checkbox" className="rounded border-border w-5 h-5" />
                                    <span className="text-muted-foreground">{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Next Steps */}
                    <Card className="bg-accent/5 border-accent/20 p-6 mb-8">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Next Steps</h3>
                        <ol className="space-y-3">
                            {assessment.nextSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex-shrink-0">
                                        {index + 1}
                                    </span>
                                    <span className="text-muted-foreground pt-0.5">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </Card>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={() => router.push("/#booking")}
                            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base"
                        >
                            Book Consultation Session
                        </Button>
                        <Button onClick={() => router.push("/")} variant="outline" className="flex-1 border-border py-6 text-base">
                            Return to Homepage
                        </Button>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-muted-foreground text-center mt-8">
                        This assessment is based on the information you provided and serves as preliminary guidance. For
                        comprehensive advice tailored to your specific situation, we recommend booking a consultation with our visa
                        experts.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    )
}
