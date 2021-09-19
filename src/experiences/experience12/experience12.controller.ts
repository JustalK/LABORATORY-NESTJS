import { Controller, Get, Res, Req, Response, Request } from '@nestjs/common'
import { Experience12Service } from './experience12.service'

@Controller('experience12')
export class Experience12Controller {
  constructor(private readonly experience12Service: Experience12Service) {}

  @Get()
  create(@Res({ passthrough: true }) response: Response) {
    return this.experience12Service.create(response);
  }

  @Get('/read')
  find(@Req() request: Request) {
    return this.experience12Service.find(request);
  }
}
