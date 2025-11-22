import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BarbershopsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createBarbershopDto: CreateBarbershopDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        id: number;
        email: string;
        name: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateBarbershopDto: UpdateBarbershopDto): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        id: number;
        email: string;
        name: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
        id: number;
        email: string;
        name: string;
        phone: string;
        logo: string | null;
        address: string;
        instagram: string | null;
        facebook: string | null;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
