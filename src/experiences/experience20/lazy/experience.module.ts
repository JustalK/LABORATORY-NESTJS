import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { LazyService } from './experience.service';

@Module({
  controllers: [ExperienceController],
  providers: [LazyService],
})
export class ExperienceModule {}
