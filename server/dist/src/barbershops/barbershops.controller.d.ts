import { BarbershopsService } from './barbershops.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
export declare class BarbershopsController {
    private readonly barbershopsService;
    constructor(barbershopsService: BarbershopsService);
    create(createBarbershopDto: CreateBarbershopDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBarbershopDto: UpdateBarbershopDto): string;
    remove(id: string): string;
}
