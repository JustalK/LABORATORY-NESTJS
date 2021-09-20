import { Controller, ClassSerializerInterceptor, Get, UseInterceptors } from '@nestjs/common'
import { Experience17Service } from './experience17.service'

@Controller('experience17')
export class Experience17Controller {
  constructor(private readonly experience17Service: Experience17Service) {}

  @Get()
  httpCall() {
    return this.experience17Service.httpCall();
  }
}
