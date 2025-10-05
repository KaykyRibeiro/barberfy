import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class loginBarberDto {
    @IsString()
    @IsNotEmpty() 
    phone: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}