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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
let AuthService = class AuthService {
    jwtService;
    prismaService;
    constructor(jwtService, prismaService) {
        this.jwtService = jwtService;
        this.prismaService = prismaService;
    }
    signToken(payload) {
        const token = this.jwtService.sign(payload, { expiresIn: '2h' });
        return token;
    }
    async loginBarbershop(loginBarbershopDto) {
        const barbershop = await this.prismaService.barbershop.findUnique({
            where: { email: loginBarbershopDto.email }
        });
        if (!barbershop) {
            throw new Error('Invalid credentials');
        }
        const isPasswordValid = bcrypt_1.default.compareSync(loginBarbershopDto.password, barbershop.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        const token = this.jwtService.sign({
            id: barbershop.id,
            name: barbershop.name,
            email: barbershop.email,
            role: 'barbershop'
        });
        return { access_token: token };
    }
    async loginBarber(loginBarberDto) {
        const barber = await this.prismaService.barber.findUnique({
            where: { phone: loginBarberDto.phone }
        });
        if (!barber) {
            throw new Error('Invalid credentials');
        }
        const isPasswordValid = bcrypt_1.default.compareSync(loginBarberDto.password, barber.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        const token = this.jwtService.sign({ name: barber.name, phone: barber.phone, id: barber.id, barbershopId: barber.barbershopId, role: 'barber' });
        return { access_token: token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map