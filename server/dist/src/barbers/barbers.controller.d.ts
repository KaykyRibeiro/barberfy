import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
export declare class BarbersController {
    private readonly barbersService;
    constructor(barbersService: BarbersService);
    create(createBarberDto: CreateBarberDto): Promise<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    }>;
    findAll(req: any): Promise<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    }[]>;
    findOne(req: any): import("@prisma/client").Prisma.Prisma__BarberClient<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateBarberDto: UpdateBarberDto): Promise<{
        id: number;
        name: string;
        phone: string;
        profile: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    }>;
}
