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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarbershopsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
let BarbershopsService = class BarbershopsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createBarbershopDto) {
        const barbershopAlreadyExists = await this.prismaService.barbershop.findUnique({
            where: {
                email: createBarbershopDto.email
            },
        });
        if (barbershopAlreadyExists) {
            throw new common_1.UnauthorizedException('Barbershop already exists');
        }
        return this.prismaService.barbershop.create({
            data: {
                ...createBarbershopDto,
                password: bcrypt_1.default.hashSync(createBarbershopDto.password, 10),
            }
        });
    }
    findAll() {
        return this.prismaService.barbershop.findMany();
    }
    findOne(id) {
        return this.prismaService.barbershop.findUnique({
            where: { id },
        });
    }
    update(id, updateBarbershopDto) {
        return this.prismaService.barbershop.update({
            where: { id },
            data: updateBarbershopDto,
        });
    }
    remove(id) {
        return this.prismaService.barbershop.update({
            where: { id },
            data: {
                name: `deleted${id}`,
                email: `deleted${Date.now()}@${id}deleted.com`,
                phone: `00${id}00`,
                address: `deleted${Date.now()}`,
                password: bcrypt_1.default.hashSync(Math.random().toString(36).slice(-8), 10),
                instagram: null,
                facebook: null,
                logo: null,
            },
        });
    }
};
exports.BarbershopsService = BarbershopsService;
exports.BarbershopsService = BarbershopsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BarbershopsService);
//# sourceMappingURL=barbershops.service.js.map