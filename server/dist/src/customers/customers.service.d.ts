import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CustomersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createCustomerDto: CreateCustomerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCustomerDto: UpdateCustomerDto): string;
    remove(id: number): string;
}
