import { Controller, Get } from '@nestjs/common'
import { Experience3Service } from './experience3.service'

@Controller('experience3')
export class Experience3Controller {
  constructor(private readonly experience3Service: Experience3Service) {}

  @Get()
  triggerMiddleware() {
    return this.experience3Service.triggerMiddleware()
  }
}
