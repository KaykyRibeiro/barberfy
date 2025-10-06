import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BarbersModule } from './barbers/barbers.module';
import { BarbershopsModule } from './barbershops/barbershops.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [PrismaModule, BarbersModule, BarbershopsModule, AuthModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
