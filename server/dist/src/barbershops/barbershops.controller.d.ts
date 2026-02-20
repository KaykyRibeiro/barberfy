import { BarbershopsService } from './barbershops.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class BarbershopsController {
    private readonly barbershopsService;
    private readonly authService;
    constructor(barbershopsService: BarbershopsService, authService: AuthService);
    create(createBarbershopDto: CreateBarbershopDto): Promise<{
        barbershop: {
            id: number;
            email: string;
            name: string;
            phone: string;
            logo: string | null;
            address: string;
            instagram: string | null;
            facebook: string | null;
            password: string;
        };
        accessToken: string;
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
    getMyData(req: any): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
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
    update(id: string, updateBarbershopDto: UpdateBarbershopDto): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__BarbershopClient<{
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
