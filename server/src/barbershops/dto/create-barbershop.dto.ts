import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class CreateBarbershopDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    instagram?: string;

    @IsString()
    facebook?: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
