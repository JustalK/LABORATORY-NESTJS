import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { Experience7Service } from './experience7.service'
import { LoggingInterceptor } from './interceptors/logging.interceptor'

@Controller('experience7')
export class Experience7Controller {
  constructor(private readonly experience7Service: Experience7Service) {}

  @Get()
  @UseInterceptors(LoggingInterceptor)
  interceptor() {
    this.experience7Service.interceptor();
  }
}
