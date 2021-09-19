import { Module } from '@nestjs/common';
import { Experience12Controller } from './experience12.controller';
import { Experience12Service } from './experience12.service';

@Module({
  controllers: [Experience12Controller],
  providers: [Experience12Service],
})
export class Experience12Module {}
