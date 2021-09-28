import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('experience20')
export class ExperienceController {
  constructor(private readonly appService: ExperienceService) {}

  @Get()
  getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
