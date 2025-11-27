import { PartialType } from '@nestjs/mapped-types';
import { CreateStepsDto } from './create-steps.dto';
export class UpdateStepsDto extends PartialType(CreateStepsDto) {}