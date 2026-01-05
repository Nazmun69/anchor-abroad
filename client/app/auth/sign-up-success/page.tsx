import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Check your email</CardTitle>
            <CardDescription>
              We&apos;ve sent you a confirmation email. Please check your inbox and click the confirmation link to
              activate your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              After confirming your email, you&apos;ll be able to log in and access your dashboard.
            </p>
            <Button asChild className="w-full">
              <Link href="/auth/login">Go to Login</Link>
            </Button>
            <div className="mt-4">
              <Link href="/" className="text-sm underline underline-offset-4">
                Back to home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
