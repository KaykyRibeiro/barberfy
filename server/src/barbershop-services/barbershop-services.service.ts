import { Injectable } from '@nestjs/common';
import { CreateBarbershopServiceDto } from './dto/create-barbershop-service.dto';
import { UpdateBarbershopServiceDto } from './dto/update-barbershop-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BarbershopServicesService {
  constructor(private prismaService: PrismaService) {}
  create(createBarbershopServiceDto: CreateBarbershopServiceDto) {
    return this.prismaService.service.create({ 
      data: createBarbershopServiceDto 
    });
  }

  findAll() {
    return this.prismaService.service.findMany();
  }

  findOne(id: number) {
    return this.prismaService.service.findUnique({ where: { id } });
  }

  update(id: number, updateBarbershopServiceDto: UpdateBarbershopServiceDto) {
    return this.prismaService.service.update({ where: { id }, data: updateBarbershopServiceDto });
  }

  remove(id: number) {
    return this.prismaService.service.delete({ where: { id } });
  }
}
