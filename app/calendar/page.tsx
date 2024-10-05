"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for scheduled posts
const scheduledPosts = [
  { id: 1, date: new Date(2023, 5, 15), content: "Exciting news coming soon! #StayTuned", platforms: ["X", "LinkedIn"] },
  { id: 2, date: new Date(2023, 5, 18), content: "Check out our latest blog post on social media strategies!", platforms: ["LinkedIn"] },
  { id: 3, date: new Date(2023, 5, 22), content: "Join us for a live Q&A session next week!", platforms: ["X"] },
]

export default function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const selectedDatePosts = scheduledPosts.filter(
    (post) => post.date.toDateString() === date?.toDateString()
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Calendar View</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Posts</CardTitle>
            <CardDescription>Select a date to view scheduled posts</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Posts for {date?.toDateString()}</CardTitle>
            <CardDescription>
              {selectedDatePosts.length} post(s) scheduled for this date
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDatePosts.length > 0 ? (
              <ul className="space-y-4">
                {selectedDatePosts.map((post) => (
                  <li key={post.id} className="border-b pb-2">
                    <p className="font-medium">{post.content}</p>
                    <p className="text-sm text-muted-foreground">
                      Platforms: {post.platforms.join(", ")}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No posts scheduled for this date.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}