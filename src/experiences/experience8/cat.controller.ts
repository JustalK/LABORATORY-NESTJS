import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service'
import { CreateCatDto } from './dto/cat.dto'

@Controller('experience8')
export class CatController {
  constructor(private readonly appService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.appService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<CreateCatDto[]> {
    return this.appService.findAll();
  }
}
