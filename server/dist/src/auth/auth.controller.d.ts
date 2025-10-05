import { loginBarbershopDto } from './dto/login-barbershop.dto';
import { loginBarberDto } from './dto/login-barber.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginBarbershop(loginBarbershopDto: loginBarbershopDto): Promise<{
        access_token: string;
    }>;
    loginBarber(loginBarberDto: loginBarberDto): Promise<{
        access_token: string;
    }>;
}
