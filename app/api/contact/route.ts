import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(1).max(40),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(1).max(5000),
  website: z.string().max(0).optional(),
})

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

  const parsed = contactSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: "Invalid submission" }, { status: 400 })
  if (parsed.data.website) return NextResponse.json({ success: true })

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) return NextResponse.json({ error: "Contact service unavailable" }, { status: 503 })

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ access_key: accessKey, ...parsed.data, website: undefined }),
    cache: "no-store",
  })
  if (!response.ok) return NextResponse.json({ error: "Submission failed" }, { status: 502 })
  return NextResponse.json({ success: true })
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
