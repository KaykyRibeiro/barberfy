"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBarbershopDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_barbershop_dto_1 = require("./create-barbershop.dto");
class UpdateBarbershopDto extends (0, mapped_types_1.PartialType)(create_barbershop_dto_1.CreateBarbershopDto) {
}
exports.UpdateBarbershopDto = UpdateBarbershopDto;
//# sourceMappingURL=update-barbershop.dto.js.map