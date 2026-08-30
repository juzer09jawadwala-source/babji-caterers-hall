import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getDb } from "@/lib/mongo";

// Ports FastAPI POST/GET /api/bookings (motor + MongoDB) to a Next.js route handler.
export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ detail: "Invalid JSON body" }, { status: 400 });
  }

  const { function_type, date, time, guests, name, phone, email, message } =
    payload || {};

  // Same validation as the old FastAPI handler.
  if (!Number.isFinite(guests) || guests <= 0) {
    return NextResponse.json(
      { detail: "Guest count must be greater than 0" },
      { status: 400 },
    );
  }
  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { detail: "Name and phone are required" },
      { status: 400 },
    );
  }

  const booking = {
    id: randomUUID(),
    function_type,
    date,
    time,
    guests,
    name,
    phone,
    email: email ?? null,
    message: message ?? null,
    created_at: new Date().toISOString(),
  };

  const db = await getDb();
  await db.collection("bookings").insertOne({ ...booking });

  return NextResponse.json(booking, { status: 201 });
}

export async function GET() {
  const db = await getDb();
  const docs = await db
    .collection("bookings")
    .find({}, { projection: { _id: 0 } })
    .sort({ created_at: -1 })
    .limit(500)
    .toArray();
  return NextResponse.json(docs);
}
