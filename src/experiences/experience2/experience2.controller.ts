import { Controller, Post, Body } from '@nestjs/common';
import { Experience2Service } from './experience2.service';
import { CreateExperience2Dto } from './dto/experience2.dto';

@Controller('experience2')
export class Experience2Controller {
  constructor(private readonly appService: Experience2Service) {}

  @Post()
  create(@Body() createExperience2Dto: CreateExperience2Dto) {
    const rsl = this.appService.handleBody(createExperience2Dto);
    return rsl;
  }
}
