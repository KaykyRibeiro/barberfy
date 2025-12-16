import { loginBarbershopDto } from './dto/login-barbershop.dto';
import { loginBarberDto } from './dto/login-barber.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prismaService;
    constructor(jwtService: JwtService, prismaService: PrismaService);
    signToken(payload: Record<string, any>): string;
    loginBarbershop(loginBarbershopDto: loginBarbershopDto): Promise<{
        access_token: string;
    }>;
    loginBarber(loginBarberDto: loginBarberDto): Promise<{
        access_token: string;
    }>;
}
