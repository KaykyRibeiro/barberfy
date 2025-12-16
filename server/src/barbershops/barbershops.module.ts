import { Module } from '@nestjs/common';
import { BarbershopsService } from './barbershops.service';
import { BarbershopsController } from './barbershops.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule, // 🔥 ISSO AQUI
  ],
  controllers: [BarbershopsController],
  providers: [BarbershopsService],
})
export class BarbershopsModule {}
