import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomersModule } from './customers/customers.module';
import { BarbersModule } from './barbers/barbers.module';
import { BarbershopsModule } from './barbershops/barbershops.module';

@Module({
  imports: [PrismaModule, CustomersModule, BarbersModule, BarbershopsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
