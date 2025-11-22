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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const upload_service_1 = require("./upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const prisma_service_1 = require("../../prisma/prisma.service");
let UploadController = class UploadController {
    uploadService;
    prismaService;
    constructor(uploadService, prismaService) {
        this.uploadService = uploadService;
        this.prismaService = prismaService;
    }
    async uploadGeneric(category, id, file) {
        const allowed = ['barbershops', 'barbers', 'services'];
        if (!allowed.includes(category)) {
            throw new common_1.BadRequestException('Categoria inválida.');
        }
        const result = await this.uploadService.upload(category, id, file);
        const numericId = Number(id);
        if (category === 'barbershops') {
            await this.prismaService.barbershop.update({
                where: { id: numericId },
                data: { logo: result.url },
            });
        }
        if (category === 'barbers') {
            await this.prismaService.barber.update({
                where: { id: numericId },
                data: { profile: result.url },
            });
        }
        if (category === 'services') {
            await this.prismaService.service.update({
                where: { id: numericId },
                data: { photo: result.url },
            });
        }
        return result;
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)(':category/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadGeneric", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_1.UploadService, prisma_service_1.PrismaService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map