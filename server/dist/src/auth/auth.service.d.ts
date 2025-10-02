import { loginBarbershopDto } from './dto/login-barbershop.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prismaService;
    constructor(jwtService: JwtService, prismaService: PrismaService);
    loginBarbershop(loginBarbershopDto: loginBarbershopDto): Promise<{
        access_token: string;
    }>;
}
