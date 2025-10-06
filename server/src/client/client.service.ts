import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {

  constructor(private prismaService: PrismaService) {}
  async create(createClientDto: CreateClientDto) {
  const { name, phone } = createClientDto;

  const existingClient = await this.prismaService.client.findFirst({
    where: { phone },
  });

  if (existingClient) {
    if (existingClient.name !== name) {
      return await this.prismaService.client.update({
        where: { id: existingClient.id },
        data: { name },
      });
    }
    return existingClient;
  }

  return await this.prismaService.client.create({
    data: { name, phone },
  });
}

  findAll() {
    return this.prismaService.client.findMany();
  }

  findOne(id: number) {
    return  this.prismaService.client.findUnique({
      where: { id },
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    try{
      const clientExist =  this.prismaService.client.findUnique({
        where: { id },
      });
      if (!clientExist) {
        throw new Error('Client does not exist');
      }

      const updateData: any = {};

      if (updateClientDto.name) updateData.name = updateClientDto.name;
      if (updateClientDto.phone) updateData.phone = updateClientDto.phone;

      const updatedClient = this.prismaService.client.update({
        where: { id },
        data: updateData,
      });
      return updatedClient;
    }catch(error){
      console.error('❌ Erro ao atualizar barbeiro:', error);
      throw error;
    }
    
  }

  remove(id: number) {
    return this.prismaService.client.update({
      where: { id },
      data: { 
        name: `deleted${id}`,
        phone: `deleted_${id}`,
      },
    });
  }
}
