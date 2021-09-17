import { Controller, Body, Post } from '@nestjs/common'
import { Experience10Service } from './experience10.service'
import { Experience10Dto } from './dto/experience10.dto'

@Controller('experience10')
export class Experience10Controller {
  constructor(private readonly experience10Service: Experience10Service) {}

  @Post()
  create(@Body() experience10Dto: Experience10Dto) {
    return 'This action adds a new user';
  }
}
