import { Test, TestingModule } from '@nestjs/testing';
import { BarbershopServicesController } from './barbershop-services.controller';
import { BarbershopServicesService } from './barbershop-services.service';

describe('BarbershopServicesController', () => {
  let controller: BarbershopServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarbershopServicesController],
      providers: [BarbershopServicesService],
    }).compile();

    controller = module.get<BarbershopServicesController>(BarbershopServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
