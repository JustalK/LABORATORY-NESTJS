import { Module } from '@nestjs/common';
import { Experience15Controller } from './experience15.controller';
import { Experience15Service } from './experience15.service';

@Module({
  controllers: [Experience15Controller],
  providers: [Experience15Service],
})
export class Experience15Module {}
