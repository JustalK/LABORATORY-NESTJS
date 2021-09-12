import { Module } from '@nestjs/common';
import { Experience2Controller } from './experience2.controller';
import { Experience2Service } from './experience2.service';

@Module({
  controllers: [Experience2Controller],
  providers: [Experience2Service],
})
export class Experience2Module {}
