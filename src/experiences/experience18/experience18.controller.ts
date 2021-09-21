import { Controller, ClassSerializerInterceptor, Get, Req, Request } from '@nestjs/common'
import { Experience18Service } from './experience18.service'

@Controller('experience18')
export class Experience18Controller {
  constructor(private readonly experience18Service: Experience18Service) {}

  @Get()
  countSession(@Req() request: Request) {
    return this.experience18Service.countSession(request);
  }
}
