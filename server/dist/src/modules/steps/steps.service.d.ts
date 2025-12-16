import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateStepsDto } from './dto/update-steps.dto';
export declare class StepsService {
    private prisma;
    constructor(prisma: PrismaService);
    getByBarbershopId(barbershopId: number): Promise<{
        id: number;
        barbershopId: number;
        services_done: boolean;
        schedule_done: boolean;
        barbers_done: boolean;
        finished: boolean;
    } | null>;
    ensureExists(barbershopId: number): Promise<{
        id: number;
        barbershopId: number;
        services_done: boolean;
        schedule_done: boolean;
        barbers_done: boolean;
        finished: boolean;
    }>;
    updateStep(barbershopId: number, dto: UpdateStepsDto): Promise<{
        id: number;
        barbershopId: number;
        services_done: boolean;
        schedule_done: boolean;
        barbers_done: boolean;
        finished: boolean;
    }>;
}
