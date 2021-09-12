import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Experience1Module } from './experiences/experience1/experience1.module';

@Module({
  imports: [Experience1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
