import { Module } from '@nestjs/common';
import { Experience14Controller } from './experience14.controller';
import { Experience14Service } from './experience14.service';

@Module({
  controllers: [Experience14Controller],
  providers: [Experience14Service],
})
export class Experience14Module {}
