import { PrismaClient } from '@prisma/client';

class DatabasePrisma {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getDatabaseClient(): PrismaClient {
    return this.prisma;
  }
}

export { DatabasePrisma };
