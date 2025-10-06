import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClientService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createClientDto: CreateClientDto): Promise<{
        id: number;
        name: string;
        phone: string;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        phone: string;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        name: string;
        phone: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateClientDto: UpdateClientDto): import("@prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        name: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        name: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
