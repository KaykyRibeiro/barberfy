import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        name: string;
        phone: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateClientDto: UpdateClientDto): import("@prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        name: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ClientClient<{
        id: number;
        name: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
