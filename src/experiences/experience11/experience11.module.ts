import { Module } from '@nestjs/common'
import { Experience11Controller } from './experience11.controller'
import { Experience11Service } from './experience11.service'
import { MyPersonnalLogger } from './loggers/logger.service'

@Module({
  controllers: [Experience11Controller],
  providers: [Experience11Service, MyPersonnalLogger],
  exports: [MyPersonnalLogger]
})
export class Experience11Module {}
