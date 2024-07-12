import { PrismaClient } from "@prisma/client";

// Instantiate the Prisma Client
const prisma = new PrismaClient();

// Export the Prisma Client instance
export { prisma };
export * from "@prisma/client"; // Optionally re-export types and modules
