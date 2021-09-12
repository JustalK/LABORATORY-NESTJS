import { Controller, Post, Body, Query, Get, Param, Redirect, HttpCode } from '@nestjs/common';
import { Experience2Service } from './experience2.service';
import { CreateExperience2Dto, ListQuery } from './dto/experience2.dto';

@Controller('experience2')
export class Experience2Controller {
  constructor(private readonly appService: Experience2Service) {}

  @Post()
  create(@Body() createExperience2Dto: CreateExperience2Dto) {
    const rsl = this.appService.handleBody(createExperience2Dto);
    return rsl;
  }

  @Get()
  @HttpCode(200)
  getAll(@Query() query: ListQuery) {
    const rsl = this.appService.handleQuery(query);
    return rsl;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.appService.handleOne(id)
  }

  @Get('redirect/redirect')
  @Redirect('/experience2', 302)
  getRedirect() {
    return 'Will never be called'
  }
}
