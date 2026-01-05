import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SubmissionForm } from "@/components/dashboard/submission-form"

export default async function SubmitPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={data.user} profile={profile} />

      <main className="container mx-auto py-8 px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">New Submission</h1>
          <p className="text-muted-foreground mt-1">Fill out the form below to submit your information</p>
        </div>

        <SubmissionForm userId={data.user.id} />
      </main>
    </div>
  )
}
