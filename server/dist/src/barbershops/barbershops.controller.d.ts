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
            name: string;
            email: string;
            phone: string;
            logo: string | null;
            address: string;
            instagram: string | null;
            facebook: string | null;
            password: string;
            id: number;
        };
        accessToken: string;
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
