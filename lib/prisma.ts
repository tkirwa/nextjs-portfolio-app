import { PrismaClient } from "@/lib/generated/prisma";

// Prevent multiple instances in development (Hot Reload)
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Use existing global Prisma instance if available (dev), otherwise create new
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"], // optional: logs queries for debugging
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
