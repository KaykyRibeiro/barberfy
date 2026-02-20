import { UploadService } from './upload.service';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UploadController {
    private readonly uploadService;
    private readonly prismaService;
    constructor(uploadService: UploadService, prismaService: PrismaService);
    uploadBarbershopLogo(req: any, file: Express.Multer.File): Promise<{
        path: string;
        url: string;
    }>;
}
