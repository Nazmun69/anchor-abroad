"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface SubmissionFormProps {
  userId: string
}

export function SubmissionForm({ userId }: SubmissionFormProps) {
  const router = useRouter()
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formType, setFormType] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.from("form_submissions").insert({
        user_id: userId,
        form_type: formType,
        form_data: formData,
        status: "pending",
      })

      if (error) throw error

      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message || "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <CardTitle>Submission Form</CardTitle>
            <CardDescription>Complete the form to submit your information</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="form-type">Form Type</Label>
            <Select value={formType} onValueChange={setFormType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select form type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visa-application">Visa Application</SelectItem>
                <SelectItem value="consultation-request">Consultation Request</SelectItem>
                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                <SelectItem value="document-review">Document Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              type="text"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="visaType">Visa Type</Label>
            <Input
              id="visaType"
              type="text"
              required
              value={formData.visaType}
              onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {error && <div className="text-sm text-red-500 bg-red-50 p-3 rounded">{error}</div>}

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Submitting..." : "Submit Form"}
            </Button>
            <Button type="button" variant="outline" asChild>
              <Link href="/dashboard">Cancel</Link>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
