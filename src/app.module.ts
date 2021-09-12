import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Experience1Module } from './experiences/experience1/experience1.module';
import { Experience2Module } from './experiences/experience2/experience2.module';

@Module({
  imports: [Experience1Module, Experience2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
