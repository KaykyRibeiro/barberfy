"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarbershopServicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BarbershopServicesService = class BarbershopServicesService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createBarbershopServiceDto) {
        return this.prismaService.service.create({
            data: createBarbershopServiceDto
        });
    }
    findAll() {
        return this.prismaService.service.findMany();
    }
    findOne(id) {
        return this.prismaService.service.findUnique({ where: { id } });
    }
    update(id, updateBarbershopServiceDto) {
        return this.prismaService.service.update({ where: { id }, data: updateBarbershopServiceDto });
    }
    remove(id) {
        return this.prismaService.service.delete({ where: { id } });
    }
};
exports.BarbershopServicesService = BarbershopServicesService;
exports.BarbershopServicesService = BarbershopServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BarbershopServicesService);
//# sourceMappingURL=barbershop-services.service.js.map