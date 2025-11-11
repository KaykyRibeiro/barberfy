import { Test, TestingModule } from '@nestjs/testing';
import { BarbershopServicesService } from './barbershop-services.service';

describe('BarbershopServicesService', () => {
  let service: BarbershopServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarbershopServicesService],
    }).compile();

    service = module.get<BarbershopServicesService>(BarbershopServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
