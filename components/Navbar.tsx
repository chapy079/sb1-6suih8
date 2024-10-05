"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          SocialScheduler
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant={pathname === "/" ? "default" : "ghost"}>Dashboard</Button>
          </Link>
          <Link href="/create">
            <Button variant={pathname === "/create" ? "default" : "ghost"}>Create Post</Button>
          </Link>
          <Link href="/calendar">
            <Button variant={pathname === "/calendar" ? "default" : "ghost"}>Calendar</Button>
          </Link>
          <Link href="/analytics">
            <Button variant={pathname === "/analytics" ? "default" : "ghost"}>Analytics</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}