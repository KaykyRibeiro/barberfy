import { BarbershopsService } from './barbershops.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
export declare class BarbershopsController {
    private readonly barbershopsService;
    constructor(barbershopsService: BarbershopsService);
    create(createBarbershopDto: CreateBarbershopDto): Promise<{
        name: string;
        email: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        id: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        id: number;
    }[]>;
    getMyData(req: any): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        name: string;
        email: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        id: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateBarbershopDto: UpdateBarbershopDto): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        name: string;
        email: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        name: string;
        email: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
