import { randomUUID } from "node:crypto";
import { createClient, type Client } from "@libsql/client";

export type MessageRecord = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
};

const globalForDatabase = globalThis as typeof globalThis & {
  libsqlClient?: Client;
};

function getClient() {
  if (!globalForDatabase.libsqlClient) {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;

    if (Boolean(url) !== Boolean(authToken)) {
      throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must both be configured.");
    }
    if (!url && process.env.NODE_ENV === "production") {
      throw new Error("Turso environment variables are required in production.");
    }

    globalForDatabase.libsqlClient = createClient(
      url ? { url, authToken } : { url: "file:./prisma/dev.db" },
    );
  }

  return globalForDatabase.libsqlClient;
}

function toMessageRecord(row: Record<string, unknown>): MessageRecord {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    subject: String(row.subject),
    message: String(row.message),
    createdAt: new Date(String(row.createdAt)),
  };
}

export async function createMessage(data: Omit<MessageRecord, "id" | "createdAt">) {
  await getClient().execute({
    sql: 'INSERT INTO "Message" (id, name, email, subject, message) VALUES (?, ?, ?, ?, ?)',
    args: [randomUUID(), data.name, data.email, data.subject, data.message],
  });
}

export async function findRecentMessages(email?: string) {
  const result = await getClient().execute(
    email
      ? {
          sql: 'SELECT id, name, email, subject, message, createdAt FROM "Message" WHERE email = ? ORDER BY createdAt DESC LIMIT 50',
          args: [email],
        }
      : 'SELECT id, name, email, subject, message, createdAt FROM "Message" ORDER BY createdAt DESC LIMIT 50',
  );
  return result.rows.map(toMessageRecord);
}
