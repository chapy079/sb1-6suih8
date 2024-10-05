"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Mock data for analytics
const analyticsData = [
  { name: 'Mon', X: 4000, LinkedIn: 2400 },
  { name: 'Tue', X: 3000, LinkedIn: 1398 },
  { name: 'Wed', X: 2000, LinkedIn: 9800 },
  { name: 'Thu', X: 2780, LinkedIn: 3908 },
  { name: 'Fri', X: 1890, LinkedIn: 4800 },
  { name: 'Sat', X: 2390, LinkedIn: 3800 },
  { name: 'Sun', X: 3490, LinkedIn: 4300 },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Posts</CardTitle>
            <CardDescription>Number of posts this week</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">28</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Engagement Rate</CardTitle>
            <CardDescription>Average engagement across platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">3.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Platform</CardTitle>
            <CardDescription>Platform with highest engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">LinkedIn</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Engagement</CardTitle>
          <CardDescription>Engagement trends across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="X" fill="#1DA1F2" />
              <Bar dataKey="LinkedIn" fill="#0077B5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}