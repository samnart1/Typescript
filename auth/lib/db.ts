import { PrismaClient } from "@prisma/client";

const prismaGlobal = global as typeof globalThis & { prisma?: PrismaClient };

export const db = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
