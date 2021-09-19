import { Controller, ClassSerializerInterceptor, Get, UseInterceptors } from '@nestjs/common'
import { Experience14Service } from './experience14.service'

@Controller('experience14')
export class Experience14Controller {
  constructor(private readonly experience14Service: Experience14Service) {}

  @Get()
  cron() {
    return this.experience14Service.cron();
  }
}
