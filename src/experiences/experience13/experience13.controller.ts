import { Controller, ClassSerializerInterceptor, Get, UseInterceptors } from '@nestjs/common'
import { Experience13Dto } from './dto/experience13.dto'
import { Experience13Service } from './experience13.service'

@Controller('experience13')
export class Experience13Controller {
  constructor(private readonly experience13Service: Experience13Service) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  serialization(): Experience13Dto {
    return this.experience13Service.serialization();
  }
}
