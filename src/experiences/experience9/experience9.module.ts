import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { Experience9Controller } from './experience9.controller';
import { Experience9Service } from './experience9.service';

@Module({
  imports: [ConfigModule],
  controllers: [Experience9Controller],
  providers: [Experience9Service],
})
export class Experience9Module {}
