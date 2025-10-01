import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
export declare class BarbershopsService {
    create(createBarbershopDto: CreateBarbershopDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBarbershopDto: UpdateBarbershopDto): string;
    remove(id: number): string;
}
