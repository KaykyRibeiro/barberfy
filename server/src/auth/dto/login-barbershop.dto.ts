import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class loginBarbershopDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}