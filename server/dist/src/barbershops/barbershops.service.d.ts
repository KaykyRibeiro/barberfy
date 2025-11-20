import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BarbershopsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createBarbershopDto: CreateBarbershopDto): Promise<{
        name: string;
        email: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        phone: string;
        id: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        phone: string;
        id: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        name: string;
        email: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        phone: string;
        id: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateBarbershopDto: UpdateBarbershopDto): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        name: string;
        email: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        phone: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        name: string;
        email: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
        phone: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
