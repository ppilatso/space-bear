import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const db = new PrismaClient({ log: ['query', 'info', 'error', 'warn'] });
export default db;

export const generateId = () => nanoid(16);