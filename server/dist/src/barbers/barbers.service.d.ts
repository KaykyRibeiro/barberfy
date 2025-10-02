import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BarbersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createBarberDto: CreateBarberDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBarberDto: UpdateBarberDto): string;
    remove(id: number): string;
}
