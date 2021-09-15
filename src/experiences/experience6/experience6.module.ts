import { Module } from '@nestjs/common';
import { Experience6Controller } from './experience6.controller';
import { Experience6Service } from './experience6.service';

@Module({
  controllers: [Experience6Controller],
  providers: [Experience6Service],
})
export class Experience6Module {}
