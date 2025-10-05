import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BarbersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createBarberDto: CreateBarberDto): Promise<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__BarberClient<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateBarberDto: UpdateBarberDto): Promise<{
        id: number;
        name: string;
        phone: string;
        profile: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        phone: string;
        password: string;
        profile: string | null;
        barbershopId: number;
    }>;
}
