import { PrismaClient } from '@prisma/client';

export class DatabasePrisma {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getDatabaseClient(): Promise<PrismaClient> {
    await this.prisma.$connect();

    return this.prisma;
  }

  async disconnect(): Promise<boolean> {
    try{
      await this.prisma.$disconnect();
      console.info( 'Database disconnected!' );

      return true;
    } catch
    {
      console.info( 'Error on disconnection!' );

      return false;
    }

  }
}
