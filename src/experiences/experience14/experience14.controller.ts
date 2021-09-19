import { Controller, ClassSerializerInterceptor, Get, UseInterceptors } from '@nestjs/common'
import { Experience14Service } from './experience14.service'

@Controller('experience14')
export class Experience14Controller {
  constructor(private readonly experience14Service: Experience14Service) {}

  @Get('stop')
  stopCronDynamic() {
    return this.experience14Service.stopCronDynamic();
  }

  @Get('start')
  startCronDynamic() {
    return this.experience14Service.startCronDynamic();
  }

  @Get('create')
  createCronDynamic() {
    return this.experience14Service.createCronDynamic();
  }
}
