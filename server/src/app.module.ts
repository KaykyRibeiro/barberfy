import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BarbersModule } from './barbers/barbers.module';
import { BarbershopsModule } from './barbershops/barbershops.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { BarbershopServicesModule } from './barbershop-services/barbershop-services.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [PrismaModule, BarbersModule, BarbershopsModule, AuthModule, ClientModule, BarbershopServicesModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
