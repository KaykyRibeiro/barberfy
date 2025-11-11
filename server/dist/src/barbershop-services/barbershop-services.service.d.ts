import { CreateBarbershopServiceDto } from './dto/create-barbershop-service.dto';
import { UpdateBarbershopServiceDto } from './dto/update-barbershop-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BarbershopServicesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createBarbershopServiceDto: CreateBarbershopServiceDto): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        barbershopId: number;
        price: number;
        duration: number;
        description: string | null;
        photo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        barbershopId: number;
        price: number;
        duration: number;
        description: string | null;
        photo: string | null;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        barbershopId: number;
        price: number;
        duration: number;
        description: string | null;
        photo: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateBarbershopServiceDto: UpdateBarbershopServiceDto): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        barbershopId: number;
        price: number;
        duration: number;
        description: string | null;
        photo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        barbershopId: number;
        price: number;
        duration: number;
        description: string | null;
        photo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
