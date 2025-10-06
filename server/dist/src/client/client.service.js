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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientService = class ClientService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createClientDto) {
        const { name, phone } = createClientDto;
        const existingClient = await this.prismaService.client.findFirst({
            where: { phone },
        });
        if (existingClient) {
            if (existingClient.name !== name) {
                return await this.prismaService.client.update({
                    where: { id: existingClient.id },
                    data: { name },
                });
            }
            return existingClient;
        }
        return await this.prismaService.client.create({
            data: { name, phone },
        });
    }
    findAll() {
        return this.prismaService.client.findMany();
    }
    findOne(id) {
        return this.prismaService.client.findUnique({
            where: { id },
        });
    }
    update(id, updateClientDto) {
        try {
            const clientExist = this.prismaService.client.findUnique({
                where: { id },
            });
            if (!clientExist) {
                throw new Error('Client does not exist');
            }
            const updateData = {};
            if (updateClientDto.name)
                updateData.name = updateClientDto.name;
            if (updateClientDto.phone)
                updateData.phone = updateClientDto.phone;
            const updatedClient = this.prismaService.client.update({
                where: { id },
                data: updateData,
            });
            return updatedClient;
        }
        catch (error) {
            console.error('❌ Erro ao atualizar barbeiro:', error);
            throw error;
        }
    }
    remove(id) {
        return this.prismaService.client.update({
            where: { id },
            data: {
                name: `deleted${id}`,
                phone: `deleted_${id}`,
            },
        });
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientService);
//# sourceMappingURL=client.service.js.map