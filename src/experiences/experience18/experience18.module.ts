import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Experience18Controller } from './experience18.controller';
import { Experience18Service } from './experience18.service';

@Module({
  imports: [HttpModule],
  controllers: [Experience18Controller],
  providers: [Experience18Service],
})
export class Experience18Module {}
