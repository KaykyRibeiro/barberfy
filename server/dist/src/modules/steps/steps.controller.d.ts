import { StepsService } from './steps.service';
import { UpdateStepsDto } from './dto/update-steps.dto';
export declare class StepsController {
    private readonly stepsService;
    constructor(stepsService: StepsService);
    getSteps(id: string): Promise<{
        id: number;
        services_done: boolean;
        schedule_done: boolean;
        barbers_done: boolean;
        finished: boolean;
        barbershopId: number;
    } | null>;
    update(id: string, dto: UpdateStepsDto): Promise<{
        id: number;
        services_done: boolean;
        schedule_done: boolean;
        barbers_done: boolean;
        finished: boolean;
        barbershopId: number;
    }>;
}
