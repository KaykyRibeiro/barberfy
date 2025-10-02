import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class loginBarbershopDto {
    @IsEmail()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}