import { Controller, Get } from '@nestjs/common';
import { LazyService } from './experience.service';

@Controller('experience20')
export class ExperienceController {
  constructor(private readonly appService: LazyService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
