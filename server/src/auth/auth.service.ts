import { Injectable } from '@nestjs/common';
import { loginBarbershopDto } from './dto/login-barbershop.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import brcypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private prismaService: PrismaService) {}

    async loginBarbershop(loginBarbershopDto: loginBarbershopDto) {
        const barbershop = await this.prismaService.barbershop.findUnique({
            where: { email: loginBarbershopDto.email }
        });
        if(!barbershop) {
            throw new Error('Invalid credentials');
        }
        const isPasswordValid = brcypt.compareSync(
            loginBarbershopDto.password, 
            barbershop.password
        );
        if(!isPasswordValid) {
            throw new Error('Invalid credentials');
        }   
        const token = this.jwtService.sign({ name: barbershop.name, email: barbershop.email, id: barbershop.id });
        return{access_token: token};
    }
}
