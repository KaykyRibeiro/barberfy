import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { StepsService } from './steps.service';
import { UpdateStepsDto } from './dto/update-steps.dto';

@Controller('steps')
export class StepsController {
  constructor(private readonly stepsService: StepsService) { }

  @Get(":barbershopId")
  getSteps(@Param("barbershopId") id: string) {
    return this.stepsService.getByBarbershopId(Number(id));
  }

  @Patch(":barbershopId")
  update(
    @Param("barbershopId") id: string,
    @Body() dto: UpdateStepsDto,
  ) {
    return this.stepsService.updateStep(Number(id), dto);
  }
}
