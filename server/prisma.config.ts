import { defineConfig } from '@prisma/config'
import * as dotenv from "dotenv";
dotenv.config();

type PrismaConfigWithSeed = Parameters<typeof defineConfig>[0] & {
  seed?: {
    run: string
  }
}

export default defineConfig({
  seed: {
    run: 'ts-node prisma/seed.ts',
  },
} as PrismaConfigWithSeed)
