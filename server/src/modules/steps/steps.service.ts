import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateStepsDto } from './dto/update-steps.dto';
import { CreateStepsDto } from './dto/create-steps.dto';

@Injectable()
export class StepsService {
  constructor(private prisma: PrismaService) {}

  async getByBarbershopId(barbershopId: number) {
    return this.prisma.step.findFirst({
      where: { barbershopId },
    });
  }

  async ensureExists(barbershopId: number) {
    const exists = await this.getByBarbershopId(barbershopId);
    if (exists) return exists;

    return this.prisma.step.create({
      data: { barbershopId },
    });
  }

  async updateStep(barbershopId: number, dto: UpdateStepsDto) {
    const step = await this.ensureExists(barbershopId);

    return this.prisma.step.update({
      where: { id: step.id },
      data: dto,
    });
  }
}