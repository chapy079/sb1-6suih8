import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CalendarDays, BarChart3, PlusCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Posts</CardTitle>
            <CardDescription>You have 5 posts scheduled</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/calendar">
              <Button className="w-full">
                <CalendarDays className="mr-2 h-4 w-4" />
                View Calendar
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View your post performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/analytics">
              <Button className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>Schedule a new post</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/create">
              <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Post
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}