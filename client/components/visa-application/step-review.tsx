"use client"

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

interface ReviewData {
    personalInfo: any
    education: any
    testScores: any
    financial: any
    travelHistory: any
}

interface StepReviewProps {
    data: ReviewData
    onSubmit: () => void
    isSubmitting: boolean
}

export function StepReview({ data, onSubmit, isSubmitting }: StepReviewProps) {
    const sections = [
        {
            title: "Personal Information",
            items: [
                { label: "Full Name", value: data.personalInfo.fullName },
                { label: "Email", value: data.personalInfo.email },
                { label: "Phone", value: data.personalInfo.phone },
                { label: "Nationality", value: data.personalInfo.nationality },
                { label: "Passport Number", value: data.personalInfo.passportNumber },
            ],
        },
        {
            title: "Educational Background",
            items: [
                { label: "Current Level", value: data.education.currentEducationLevel },
                { label: "Intended Degree", value: data.education.intendedDegree },
                { label: "Field of Study", value: data.education.fieldOfStudy },
                { label: "Target University", value: data.education.targetUniversity },
            ],
        },
        {
            title: "Test Scores",
            items: [
                { label: "English Test", value: data.testScores.englishTest || "Not taken" },
                { label: "English Score", value: data.testScores.englishScore || "N/A" },
                { label: "Graduate Exam", value: data.testScores.greGmat || "Not taken" },
                { label: "Exam Score", value: data.testScores.greGmatScore || "N/A" },
            ],
        },
        {
            title: "Financial Information",
            items: [
                { label: "Funding Source", value: data.financial.fundingSource },
                {
                    label: "Available Funds",
                    value: `${data.financial.availableFunds} ${data.financial.currency}`,
                },
                { label: "Employment Status", value: data.financial.employmentStatus },
            ],
        },
        {
            title: "Travel History",
            items: [
                { label: "Previous Visa", value: data.travelHistory.hasPreviousVisa === "yes" ? "Yes" : "No" },
                { label: "Visa Rejection", value: data.travelHistory.hasVisaRejection === "yes" ? "Yes" : "No" },
            ],
        },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Review Your Information</h3>
                <p className="text-muted-foreground">Please review all details before submitting</p>
            </div>

            <div className="space-y-6">
                {sections.map((section, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4">{section.title}</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <p className="text-sm text-muted-foreground">{item.label}</p>
                                    <p className="text-foreground font-medium">{item.value || "Not provided"}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Your information will be reviewed by our visa experts</li>
                    <li>• You'll receive an initial assessment within 24-48 hours</li>
                    <li>• We'll provide personalized recommendations for your visa application</li>
                    <li>• You can book a consultation session to discuss your case in detail</li>
                </ul>
            </div>

            <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="rounded border-border" required />
                <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and confirm that all information provided is accurate
                </Label>
            </div>

            <Button
                onClick={onSubmit}
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
            >
                {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
        </div>
    )
}
