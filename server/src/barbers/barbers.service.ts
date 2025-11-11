import { Injectable } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';

@Injectable()
export class BarbersService {
  constructor(private prismaService: PrismaService) {}
  async create(createBarberDto: CreateBarberDto) {
    const barberAlreadyExists = await this.prismaService.barber.findUnique({
      where: { phone: createBarberDto.phone },
    });
    if(barberAlreadyExists) {
      throw new Error('Barber already exists');
    }
    return this.prismaService.barber.create({
      data: {
        name: createBarberDto.name,
        phone: createBarberDto.phone,
        password: bcrypt.hashSync(createBarberDto.password, 10),
        profile: createBarberDto.profile,
        barbershop: {
          connect: { id: Number(createBarberDto.barbershopId) }, // vínculo com a barbearia
        },
      }
    });
  }

  async findAllByBarbershop(barbershopId: number) {
  return this.prismaService.barber.findMany({
    where: { barbershopId },
  });
}


  findOne(id: number) {
    return this.prismaService.barber.findUnique({
      where: { id },
    });
  }

   async update(id: number, updateBarberDto: UpdateBarberDto) {
    try {
      const barberExist = await this.prismaService.barber.findUnique({
        where: { id },
      });
      if (!barberExist) {
        throw new Error('Barber does not exist');
      }
      // Preparar dados para atualização
      const updateData: any = {};

      if (updateBarberDto.name) updateData.name = updateBarberDto.name;
      if (updateBarberDto.phone) updateData.phone = updateBarberDto.phone;
      if (updateBarberDto.profile) updateData.profile = updateBarberDto.profile;
      // Se uma nova senha foi fornecida, fazer hash
      if (updateBarberDto.password) {
        updateData.password = bcrypt.hashSync(updateBarberDto.password, 10);
      }
      const updatedBarber = await this.prismaService.barber.update({
        where: { id},
        data: updateData,
        select: {
          id: true,
          name: true,
          phone: true,
          profile: true,
          //barbershopId: true,
        },
      });
        return updatedBarber;
    } catch(error) {
      console.error('❌ Erro ao atualizar barbeiro:', error);
      throw error;
    }
    
  }

  async remove(id: number) {
    const barber = await this.prismaService.barber.findUnique({ where: { id } });
    console.log('Barber encontrado:', barber);
    return this.prismaService.barber.update({
      
      where: { id },
      data: { 
        name: `deleted${id}`,
        phone: `deleted_${id}`,
        password: 'deleted',           
        profile: null,
      },
    });
  }
}
