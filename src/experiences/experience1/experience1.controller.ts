import { Controller, Get } from '@nestjs/common';
import { Experience1Service } from './experience1.service';

@Controller('experience1')
export class Experience1Controller {
  constructor(private readonly appService: Experience1Service) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
