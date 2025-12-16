export declare class UploadService {
    private supabase;
    upload(category: string, file: Express.Multer.File): Promise<{
        path: string;
        url: string;
    }>;
}
