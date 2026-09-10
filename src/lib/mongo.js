import { MongoClient } from "mongodb";

// Lazy MongoDB connection cache across serverless invocations / hot reloads
const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || "babji";

let clientPromise;

function getClientPromise() {
  if (!uri) {
    return Promise.reject(
      new Error("MONGO_URL is not set. Add it to environment variables."),
    );
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri).connect();
  }
  return clientPromise;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(dbName);
}

