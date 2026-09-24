import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor(private readonly configService:ConfigService) {
    const adapter = new PrismaPg({
      connectionString: configService.get<string>('DATABASE_URL')

    });
    super({
      adapter,
      log:
      configService.get<string>('NODE_ENV') === 'development' ? ['warn', 'error'] : ['error'],
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
