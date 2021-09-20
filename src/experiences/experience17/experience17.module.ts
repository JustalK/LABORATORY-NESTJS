import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Experience17Controller } from './experience17.controller';
import { Experience17Service } from './experience17.service';

@Module({
  imports: [HttpModule],
  controllers: [Experience17Controller],
  providers: [Experience17Service],
})
export class Experience17Module {}
