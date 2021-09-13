import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'
import { Experience4Service } from './experience4.service';

@Controller('experience4')
export class Experience4Controller {
  constructor(private readonly experience4Service: Experience4Service) {}

  @Get()
  error() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: {
        test: 'This is a custom message',
        test2: 'This is a test with an object'
      },
    }, HttpStatus.FORBIDDEN);
  }
}
