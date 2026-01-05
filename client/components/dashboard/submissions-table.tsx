"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Trash2 } from "lucide-react"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Submission {
  id: string
  form_type: string
  form_data: any
  status: string
  created_at: string
}

interface SubmissionsTableProps {
  submissions: Submission[]
}

export function SubmissionsTable({ submissions }: SubmissionsTableProps) {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return

    const { error } = await supabase.from("form_submissions").delete().eq("id", id)

    if (!error) {
      router.refresh()
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
      case "submitted":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  const formatFormType = (type: string) => {
    return type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const renderFormData = (submission: Submission) => {
    if (submission.form_type === "visa-application") {
      const data = submission.form_data
      return (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Personal Information</h4>
            <div className="bg-muted p-3 rounded space-y-1 text-sm">
              <p>
                <span className="font-medium">Name:</span> {data.personalInfo?.fullName || "N/A"}
              </p>
              <p>
                <span className="font-medium">Email:</span> {data.personalInfo?.email || "N/A"}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {data.personalInfo?.phone || "N/A"}
              </p>
              <p>
                <span className="font-medium">Nationality:</span> {data.personalInfo?.nationality || "N/A"}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Education</h4>
            <div className="bg-muted p-3 rounded space-y-1 text-sm">
              <p>
                <span className="font-medium">Intended Degree:</span> {data.education?.intendedDegree || "N/A"}
              </p>
              <p>
                <span className="font-medium">Field of Study:</span> {data.education?.fieldOfStudy || "N/A"}
              </p>
              <p>
                <span className="font-medium">Target University:</span> {data.education?.targetUniversity || "N/A"}
              </p>
              <p>
                <span className="font-medium">GPA:</span> {data.education?.gpa || "N/A"}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Financial Information</h4>
            <div className="bg-muted p-3 rounded space-y-1 text-sm">
              <p>
                <span className="font-medium">Funding Source:</span> {data.financial?.fundingSource || "N/A"}
              </p>
              <p>
                <span className="font-medium">Available Funds:</span> {data.financial?.currency}{" "}
                {data.financial?.availableFunds || "N/A"}
              </p>
            </div>
          </div>

          <details className="cursor-pointer">
            <summary className="font-semibold mb-2">View Full JSON Data</summary>
            <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs mt-2">{JSON.stringify(data, null, 2)}</pre>
          </details>
        </div>
      )
    }

    return (
      <div>
        <h4 className="font-semibold mb-2">Form Data</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm">
          {JSON.stringify(submission.form_data, null, 2)}
        </pre>
      </div>
    )
  }

  if (submissions.length === 0) {
    return (
      <div className="rounded-lg border p-12 text-center">
        <p className="text-muted-foreground">No submissions yet. Create your first submission to get started.</p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Form Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{formatFormType(submission.form_type)}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(submission.status)}>
                    {submission.status}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(submission.created_at).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => setSelectedSubmission(submission)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(submission.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedSubmission && formatFormType(selectedSubmission.form_type)}</DialogTitle>
            <DialogDescription>
              Submitted on {selectedSubmission && new Date(selectedSubmission.created_at).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Status</h3>
              <Badge
                variant="secondary"
                className={selectedSubmission ? getStatusColor(selectedSubmission.status) : ""}
              >
                {selectedSubmission?.status}
              </Badge>
            </div>
            {selectedSubmission && renderFormData(selectedSubmission)}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
