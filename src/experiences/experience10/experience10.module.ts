import { Module } from '@nestjs/common'
import { Experience10Controller } from './experience10.controller'
import { Experience10Service } from './experience10.service'

@Module({
  controllers: [Experience10Controller],
  providers: [Experience10Service]
})
export class Experience10Module {}
