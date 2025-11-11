import { Module } from '@nestjs/common';
import { BarbershopServicesService } from './barbershop-services.service';
import { BarbershopServicesController } from './barbershop-services.controller';

@Module({
  controllers: [BarbershopServicesController],
  providers: [BarbershopServicesService],
})
export class BarbershopServicesModule {}
