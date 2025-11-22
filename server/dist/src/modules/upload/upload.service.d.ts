export declare class UploadService {
    private supabase;
    upload(category: string, id: string | number, file: Express.Multer.File): Promise<{
        path: string;
        url: string;
    }>;
}
