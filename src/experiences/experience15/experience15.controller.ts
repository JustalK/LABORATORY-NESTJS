import { Controller, ClassSerializerInterceptor, Get, UseInterceptors } from '@nestjs/common'
import { Experience15Service } from './experience15.service'

@Controller('experience15')
export class Experience15Controller {
  constructor(private readonly experience15Service: Experience15Service) {}

  @Get('dispatch')
  dispatchEvent() {
    return this.experience15Service.dispatchEvent();
  }
}
