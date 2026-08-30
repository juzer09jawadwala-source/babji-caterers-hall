import { MongoClient } from "mongodb";

// Reuse the Mongo connection across hot reloads / serverless invocations.
const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || "babji";

let clientPromise;

if (!uri) {
  // Defer the error to request time so the app can still build without a DB.
  clientPromise = Promise.reject(
    new Error("MONGO_URL is not set. Add it to web/.env.local"),
  );
} else if (process.env.NODE_ENV === "development") {
  // In dev, cache on the global object so we don't open a new pool on every reload.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}
