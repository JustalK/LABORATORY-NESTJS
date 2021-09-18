import { Controller, Body, Get } from '@nestjs/common'
import { Experience11Service } from './experience11.service'

@Controller('experience11')
export class Experience11Controller {
  constructor(private readonly experience11Service: Experience11Service) {}

  @Get()
  test() {
    return this.experience11Service.test();
  }
}
