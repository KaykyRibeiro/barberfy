"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStepsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_steps_dto_1 = require("./create-steps.dto");
class UpdateStepsDto extends (0, mapped_types_1.PartialType)(create_steps_dto_1.CreateStepsDto) {
}
exports.UpdateStepsDto = UpdateStepsDto;
//# sourceMappingURL=update-steps.dto.js.map