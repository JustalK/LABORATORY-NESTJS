import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config';
import { Experience9Service } from './experience9.service'

@Controller('experience9')
export class Experience9Controller {
  constructor(private readonly experience9Service: Experience9Service, private configService: ConfigService) {}

  @Get()
  getConfigService() {
    return this.configService.get<string>('TEST');
  }
}
