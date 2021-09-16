import { Module } from '@nestjs/common';
import { Experience7Controller } from './experience7.controller';
import { Experience7Service } from './experience7.service';

@Module({
  controllers: [Experience7Controller],
  providers: [Experience7Service],
})
export class Experience7Module {}
