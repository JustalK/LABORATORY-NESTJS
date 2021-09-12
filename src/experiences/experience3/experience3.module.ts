import { Module } from '@nestjs/common';
import { Experience3Controller } from './experience3.controller';
import { Experience3Service } from './experience3.service';

@Module({
  controllers: [Experience3Controller],
  providers: [Experience3Service],
})
export class Experience3Module {}
