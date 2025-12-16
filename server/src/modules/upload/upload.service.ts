import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class UploadService {
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    { auth: { persistSession: false } }
  );

  async upload(category: string, file: Express.Multer.File) {
    const filePath = `${category}/${Date.now()}-${file.originalname}`;

    const { data, error } = await this.supabase
      .storage
      .from('barbershops')
      .upload(filePath, file.buffer, { upsert: true });

    if (error) throw error;

    const { data: publicURL } = this.supabase
      .storage
      .from('barbershops')
      .getPublicUrl(filePath);

    return {
      path: filePath,
      url: publicURL.publicUrl
    };
  }
}
