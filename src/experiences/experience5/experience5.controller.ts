import { Controller, Get, ParseIntPipe, Param, UsePipes, Body, Post } from '@nestjs/common'
import { Experience5Service } from './experience5.service';
import { Experience5DTO } from './dto/experience5.dto'
import { schema } from './joi/experience5.schema'
import { Experience5Validators } from './validators/experience5.validator'

@Controller('experience5')
export class Experience5Controller {
  constructor(private readonly experience5Service: Experience5Service) {}

  @Get(':id')
  test(@Param('id', ParseIntPipe) id: number) {
    return this.experience5Service.useless(id);
  }

  @Post()
  @UsePipes(new Experience5Validators(schema))
  async create(@Body() experience5DTO: Experience5DTO) {
    return this.experience5Service.create(experience5DTO);
  }
}
