import { randomUUID } from "node:crypto";
import { createClient, type Client } from "@libsql/client";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  password: string;
};

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

function toUserRecord(row: Record<string, unknown>): UserRecord {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    password: String(row.password),
  };
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

export async function findUserByEmail(email: string) {
  const result = await getClient().execute({
    sql: 'SELECT id, name, email, password FROM "User" WHERE email = ? LIMIT 1',
    args: [email],
  });
  const row = result.rows[0];
  return row ? toUserRecord(row) : null;
}

export async function createUser(data: Omit<UserRecord, "id">) {
  const user = { id: randomUUID(), ...data };
  await getClient().execute({
    sql: 'INSERT INTO "User" (id, name, email, password) VALUES (?, ?, ?, ?)',
    args: [user.id, user.name, user.email, user.password],
  });
  return user;
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

export async function countUsers() {
  const result = await getClient().execute('SELECT COUNT(*) AS count FROM "User"');
  return Number(result.rows[0]?.count ?? 0);
}
