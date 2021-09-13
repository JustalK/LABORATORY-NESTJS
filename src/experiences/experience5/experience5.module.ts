import { Module } from '@nestjs/common';
import { Experience5Controller } from './experience5.controller';
import { Experience5Service } from './experience5.service';

@Module({
  controllers: [Experience5Controller],
  providers: [Experience5Service],
})
export class Experience5Module {}
