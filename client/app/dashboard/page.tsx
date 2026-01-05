import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SubmissionsTable } from "@/components/dashboard/submissions-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, FileText } from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

  const { data: submissions } = await supabase
    .from("form_submissions")
    .select("*")
    .eq("user_id", data.user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={data.user} profile={profile} />

      <main className="container mx-auto py-8 px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Submissions</h1>
            <p className="text-muted-foreground mt-1">View and manage your form submissions</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/visa-application">
                <FileText className="mr-2 h-4 w-4" />
                Visa Application
              </Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard/submit">
                <Plus className="mr-2 h-4 w-4" />
                New Submission
              </Link>
            </Button>
          </div>
        </div>

        <SubmissionsTable submissions={submissions || []} />
      </main>
    </div>
  )
}
