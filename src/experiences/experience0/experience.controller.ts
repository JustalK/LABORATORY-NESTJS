import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('experience0')
export class ExperienceController {
  constructor(private readonly appService: ExperienceService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
