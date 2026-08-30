import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getDb } from "@/lib/mongo";

// Ports FastAPI POST/GET /api/status.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: "Invalid JSON body" }, { status: 400 });
  }

  if (!body?.client_name) {
    return NextResponse.json(
      { detail: "client_name is required" },
      { status: 400 },
    );
  }

  const status = {
    id: randomUUID(),
    client_name: body.client_name,
    timestamp: new Date().toISOString(),
  };

  const db = await getDb();
  await db.collection("status_checks").insertOne({ ...status });

  return NextResponse.json(status);
}

export async function GET() {
  const db = await getDb();
  const docs = await db
    .collection("status_checks")
    .find({}, { projection: { _id: 0 } })
    .limit(1000)
    .toArray();
  return NextResponse.json(docs);
}
