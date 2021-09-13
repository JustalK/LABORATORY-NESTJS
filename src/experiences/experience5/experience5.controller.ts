import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common'
import { Experience5Service } from './experience5.service';

@Controller('experience5')
export class Experience5Controller {
  constructor(private readonly experience5Service: Experience5Service) {}

  @Get(':id')
  test(@Param('id', ParseIntPipe) id: number) {
    return this.experience5Service.useless(id);
  }
}
