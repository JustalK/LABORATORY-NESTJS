import { Module } from '@nestjs/common';
import { Experience13Controller } from './experience13.controller';
import { Experience13Service } from './experience13.service';

@Module({
  controllers: [Experience13Controller],
  providers: [Experience13Service],
})
export class Experience13Module {}
