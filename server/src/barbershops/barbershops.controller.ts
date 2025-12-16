import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { BarbershopsService } from './barbershops.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';


@Controller('barbershops')
export class BarbershopsController {
  constructor(
    private readonly barbershopsService: BarbershopsService,
    private readonly authService: AuthService
  ) { }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createBarbershopDto: CreateBarbershopDto) {
    const barbershop = await this.barbershopsService.create(createBarbershopDto);

    const tokenPayload = {
      id: barbershop.id,
      name: barbershop.name,
      email: barbershop.email,
      role: 'barbershop',
    };
    const accessToken = this.authService.signToken(tokenPayload);
    
    return { barbershop, accessToken };
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.barbershopsService.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.barbershopsService.findOne(+id);
  }*/

  @UseGuards(AuthGuard)
  @Get('me')
  getMyData(@Req() req) {
    return this.barbershopsService.findOne(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarbershopDto: UpdateBarbershopDto) {
    return this.barbershopsService.update(+id, updateBarbershopDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barbershopsService.remove(+id);
  }
}
