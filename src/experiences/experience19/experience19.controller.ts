import { Controller, Get, Inject } from '@nestjs/common'

@Controller('experience19')
export class Experience19Controller {
  constructor(@Inject('CONNECTION') private connection) {}

  @Get()
  getValue() {
    return this.connection;
  }
}
