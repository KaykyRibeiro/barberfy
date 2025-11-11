import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BarbershopServicesService } from './barbershop-services.service';
import { CreateBarbershopServiceDto } from './dto/create-barbershop-service.dto';
import { UpdateBarbershopServiceDto } from './dto/update-barbershop-service.dto';

@Controller('barbershop-services')
export class BarbershopServicesController {
  constructor(private readonly barbershopServicesService: BarbershopServicesService) {}

  @Post()
  create(@Body() createBarbershopServiceDto: CreateBarbershopServiceDto) {
    return this.barbershopServicesService.create(createBarbershopServiceDto);
  }

  @Get()
  findAll() {
    return this.barbershopServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barbershopServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarbershopServiceDto: UpdateBarbershopServiceDto) {
    return this.barbershopServicesService.update(+id, updateBarbershopServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barbershopServicesService.remove(+id);
  }
}
