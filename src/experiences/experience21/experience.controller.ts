import { Controller, Post, Param, Body } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('experience21')
export class ExperienceController {
  constructor(private readonly appService: ExperienceService) {}

  @Post('encrypt')
  async encryptData(@Body() data): Promise<String> {
    const buffer = await this.appService.encryptData(data.text);
    return buffer.toString('hex');
  }

  @Post('decrypt')
  async decryptData(@Body() data): Promise<String> {
    const buffer = await this.appService.decryptData(Buffer.from(data.text, "hex"));
    return buffer.toString();
  }
}
