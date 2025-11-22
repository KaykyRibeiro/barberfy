import { BadRequestException, Controller, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService, private readonly prismaService: PrismaService) { }

  @Post(':category/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadGeneric(
    @Param('category') category: string,
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    const allowed = ['barbershops', 'barbers', 'services'];

    if (!allowed.includes(category)) {
      throw new BadRequestException('Categoria inválida.');
    }

    const result = await this.uploadService.upload(category, id, file);

    const numericId = Number(id);

    if (category === 'barbershops') {
      await this.prismaService.barbershop.update({
        where: { id: numericId },
        data: { logo: result.url },
      });
    }

    if (category === 'barbers') {
      await this.prismaService.barber.update({
        where: { id: numericId },
        data: { profile: result.url },
      });
    }

    if (category === 'services') {
      await this.prismaService.service.update({
        where: { id: numericId },
        data: { photo: result.url },
      });
    }

    return result;
  }




}
