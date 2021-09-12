import { Module } from '@nestjs/common';
import { Experience1Controller } from './experience1.controller';
import { Experience1Service } from './experience1.service';

@Module({
  controllers: [Experience1Controller],
  providers: [Experience1Service],
})
export class Experience1Module {}
