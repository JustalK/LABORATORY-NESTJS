import { Controller, Get } from '@nestjs/common';
import { Experience2Service } from './experience2.service';

@Controller('experience2')
export class Experience2Controller {
  constructor(private readonly appService: Experience2Service) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
