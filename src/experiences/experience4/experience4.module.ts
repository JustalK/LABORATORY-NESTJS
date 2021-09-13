import { Module } from '@nestjs/common';
import { Experience4Controller } from './experience4.controller';
import { Experience4Service } from './experience4.service';

@Module({
  controllers: [Experience4Controller],
  providers: [Experience4Service],
})
export class Experience4Module {}
