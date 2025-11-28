import { Module } from '@nestjs/common'

import { PrismaService } from '@/prisma.service'

import { ColorController } from './color.controller'
import { ColorService } from './color.service'

@Module({
  controllers: [ColorController],
  providers: [ColorService, PrismaService]
})
export class ColorModule {}
