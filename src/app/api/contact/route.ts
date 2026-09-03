import { db } from "@/db"
import { contactMessages } from "@/db/schema"
import { nanoid } from "nanoid"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    await db.insert(contactMessages).values({
      id: nanoid(),
      name,
      email,
      subject,
      message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving contact message:", error)
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    )
  }
}
