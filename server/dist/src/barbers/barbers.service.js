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
exports.BarbersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
let BarbersService = class BarbersService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createBarberDto) {
        const barberAlreadyExists = await this.prismaService.barber.findUnique({
            where: { phone: createBarberDto.phone },
        });
        if (barberAlreadyExists) {
            throw new Error('Barber already exists');
        }
        return this.prismaService.barber.create({
            data: {
                name: createBarberDto.name,
                phone: createBarberDto.phone,
                password: bcrypt_1.default.hashSync(createBarberDto.password, 10),
                profile: createBarberDto.profile,
                barbershop: {
                    connect: { id: Number(createBarberDto.barbershopId) },
                },
            }
        });
    }
    async findAllByBarbershop(barbershopId) {
        return this.prismaService.barber.findMany({
            where: { barbershopId },
        });
    }
    findOne(id) {
        return this.prismaService.barber.findUnique({
            where: { id },
        });
    }
    async update(id, updateBarberDto) {
        try {
            const barberExist = await this.prismaService.barber.findUnique({
                where: { id },
            });
            if (!barberExist) {
                throw new Error('Barber does not exist');
            }
            const updateData = {};
            if (updateBarberDto.name)
                updateData.name = updateBarberDto.name;
            if (updateBarberDto.phone)
                updateData.phone = updateBarberDto.phone;
            if (updateBarberDto.profile)
                updateData.profile = updateBarberDto.profile;
            if (updateBarberDto.password) {
                updateData.password = bcrypt_1.default.hashSync(updateBarberDto.password, 10);
            }
            const updatedBarber = await this.prismaService.barber.update({
                where: { id },
                data: updateData,
                select: {
                    id: true,
                    name: true,
                    phone: true,
                    profile: true,
                },
            });
            return updatedBarber;
        }
        catch (error) {
            console.error('❌ Erro ao atualizar barbeiro:', error);
            throw error;
        }
    }
    async remove(id) {
        const barber = await this.prismaService.barber.findUnique({ where: { id } });
        console.log('Barber encontrado:', barber);
        return this.prismaService.barber.update({
            where: { id },
            data: {
                name: `deleted${id}`,
                phone: `deleted_${id}`,
                password: 'deleted',
                profile: null,
            },
        });
    }
};
exports.BarbersService = BarbersService;
exports.BarbersService = BarbersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BarbersService);
//# sourceMappingURL=barbers.service.js.map