import { Body, Controller, Post } from '@nestjs/common';
import { loginBarbershopDto } from './dto/login-barbershop.dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login/barbershop')
     async loginBarbershop(@Body() loginBarbershopDto: loginBarbershopDto) {
        return this.authService.loginBarbershop(loginBarbershopDto);
    }
}
