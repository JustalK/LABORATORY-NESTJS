import { Module } from '@nestjs/common';
import { Experience16Controller } from './experience16.controller';
import { Experience16Service } from './experience16.service';

@Module({
  controllers: [Experience16Controller],
  providers: [Experience16Service],
})
export class Experience16Module {}
