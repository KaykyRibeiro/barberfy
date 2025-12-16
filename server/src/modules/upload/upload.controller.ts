import { BadRequestException, Controller, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly prismaService: PrismaService
  ) { }

  @Post('barbershops/logo')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadBarbershopLogo(
    @Req() req,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const barbershopId = req.user.id;

    const result = await this.uploadService.upload(
      `barbershops/${barbershopId}`,
      file,
    );

    await this.prismaService.barbershop.update({
      where: { id: barbershopId },
      data: { logo: result.url },
    });

    return result;
  }

}
