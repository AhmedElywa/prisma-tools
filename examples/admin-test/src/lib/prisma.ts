import { PrismaClient } from '../generated/prisma';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import path from 'path';

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
const adapter = new PrismaLibSql({ url: `file:${dbPath}` });

const prisma = new PrismaClient({ adapter });

export default prisma;
