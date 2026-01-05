"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ProgressIndicator } from "@/components/visa-application/progess-indicator"
import { StepPersonalInfo } from "@/components/visa-application/step-personal-info"
import { StepEducation } from "@/components/visa-application/step-education"
import { StepTestScores } from "@/components/visa-application/step-test-scores"
import { StepFinancial } from "@/components/visa-application/step-financial"
import { StepTravelHistory } from "@/components/visa-application/step-travel-history"
import { StepReview } from "@/components/visa-application/step-review"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function VisaApplicationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  const steps = ["Personal", "Education", "Tests", "Financial", "Travel", "Review"]

  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      nationality: "",
      passportNumber: "",
    },
    education: {
      currentEducationLevel: "",
      intendedDegree: "",
      fieldOfStudy: "",
      targetUniversity: "",
      programStartDate: "",
      gpa: "",
      additionalInfo: "",
    },
    testScores: {
      englishTest: "",
      englishScore: "",
      englishTestDate: "",
      greGmat: "",
      greGmatScore: "",
      greGmatTestDate: "",
      hasTestScores: "",
    },
    financial: {
      fundingSource: "",
      availableFunds: "",
      currency: "",
      sponsorName: "",
      sponsorRelationship: "",
      employmentStatus: "",
      additionalFinancialInfo: "",
    },
    travelHistory: {
      hasPreviousVisa: "",
      previousVisaDetails: "",
      hasVisaRejection: "",
      rejectionDetails: "",
      travelHistory: "",
    },
  })

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.push("/auth/login?redirect=/visa-application")
      return
    }

    setUser(user)
    setIsLoading(false)

    // Pre-fill email from user account
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        email: user.email || "",
      },
    }))
  }

  const updateFormData = (section: keyof typeof formData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }))

    // Save to localStorage for draft
    const updatedData = {
      ...formData,
      [section]: { ...formData[section], ...data },
    }
    localStorage.setItem("visaApplicationDraft", JSON.stringify(updatedData))
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = async () => {
    if (!user) {
      router.push("/auth/login")
      return
    }

    setIsSubmitting(true)

    try {
      const supabase = createClient()

      const { data, error } = await supabase
        .from("form_submissions")
        .insert({
          user_id: user.id,
          form_type: "visa-application",
          form_data: formData,
          status: "submitted",
        })
        .select()
        .single()

      if (error) {
        console.error("Error saving visa application:", error)
        alert("Failed to submit application. Please try again.")
        setIsSubmitting(false)
        return
      }

      console.log("Visa application saved successfully:", data)

      // Clear draft from localStorage
      localStorage.removeItem("visaApplicationDraft")

      // Store submission data for assessment page
      localStorage.setItem("visaApplicationSubmission", JSON.stringify(formData))

      setIsSubmitting(false)

      // Navigate to assessment page
      router.push("/visa-application/assessment")
    } catch (err) {
      console.error("Unexpected error:", err)
      alert("An unexpected error occurred. Please try again.")
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepPersonalInfo data={formData.personalInfo} onChange={(data) => updateFormData("personalInfo", data)} />
        )
      case 2:
        return <StepEducation data={formData.education} onChange={(data) => updateFormData("education", data)} />
      case 3:
        return <StepTestScores data={formData.testScores} onChange={(data) => updateFormData("testScores", data)} />
      case 4:
        return <StepFinancial data={formData.financial} onChange={(data) => updateFormData("financial", data)} />
      case 5:
        return (
          <StepTravelHistory data={formData.travelHistory} onChange={(data) => updateFormData("travelHistory", data)} />
        )
      case 6:
        return <StepReview data={formData} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      default:
        return null
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card border border-border rounded-xl p-12">
              <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Loading...</h2>
              <p className="text-muted-foreground">Please wait while we verify your session</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Student Visa Application
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete this form to receive personalized feedback on your visa eligibility
            </p>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} steps={steps} />

          {/* Form Content */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-8">{renderStep()}</div>

          {/* Navigation Buttons */}
          {currentStep < steps.length && (
            <div className="flex justify-between items-center">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                variant="outline"
                size="lg"
                className="border-border bg-transparent"
              >
                Previous
              </Button>

              <div className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </div>

              <Button onClick={handleNext} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Next Step
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
