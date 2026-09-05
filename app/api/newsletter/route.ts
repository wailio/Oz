import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({ email: z.string().trim().email().max(254) })
const attempts = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_ATTEMPTS = 5

function allowed(ip: string) {
  const now = Date.now()
  const entry = attempts.get(ip)
  if (!entry || entry.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (entry.count >= MAX_ATTEMPTS) return false
  entry.count += 1
  return true
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (!allowed(ip)) return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success || /[=+\-@\t\r]/.test(parsed.data?.email ?? "")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }
  const scriptUrl = process.env.NEWSLETTER_SCRIPT_URL
  if (!scriptUrl) return NextResponse.json({ error: "Newsletter service unavailable" }, { status: 503 })
  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(parsed.data).toString(),
    cache: "no-store",
  })
  if (!response.ok) return NextResponse.json({ error: "Subscription failed" }, { status: 502 })
  return NextResponse.json({ success: true })
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
