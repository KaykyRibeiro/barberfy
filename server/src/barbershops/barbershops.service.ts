import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';

@Injectable()
export class BarbershopsService {

  constructor(private prismaService: PrismaService) {}
  async create(createBarbershopDto: CreateBarbershopDto) {
    const barbershopAlreadyExists = await this.prismaService.barbershop.findUnique({
      where: { email: createBarbershopDto.email },
    });

    if (barbershopAlreadyExists) {
      throw new UnauthorizedException('Barbershop already exists');
    }

    return this.prismaService.barbershop.create({
      data: {
        ...createBarbershopDto,
        password: bcrypt.hashSync(createBarbershopDto.password, 10),
      }
    });
  }

  findAll() {
    return this.prismaService.barbershop.findMany();
  }

  findOne(id: number) {
    return this.prismaService.barbershop.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBarbershopDto: UpdateBarbershopDto) {
    return this.prismaService.barbershop.update({
      where: { id },
      data: updateBarbershopDto,
    });
  }

  remove(id: number) {
    return this.prismaService.barbershop.update({
      where: { id },
      data: { 
        name: `deleted${id}`,
        email: `deleted${Date.now()}@${id}deleted.com`,
        phone: `00${id}00`,
        address: `deleted${Date.now()}`,
        password: bcrypt.hashSync(Math.random().toString(36).slice(-8), 10),
        instagram: null,
        facebook: null,
        logo: null,
       },
    });
  }
}
