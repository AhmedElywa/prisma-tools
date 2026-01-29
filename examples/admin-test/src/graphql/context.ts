import type { PrismaClient } from '@/generated/prisma';

export interface Context {
  prisma: PrismaClient;
  select: Record<string, any>;
}
