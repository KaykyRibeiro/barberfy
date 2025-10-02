import { loginBarbershopDto } from './dto/login-barbershop.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginBarbershop(loginBarbershopDto: loginBarbershopDto): Promise<{
        access_token: string;
    }>;
}
