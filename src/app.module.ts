import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Experience1Module } from './experiences/experience1/experience1.module';
import { Experience2Module } from './experiences/experience2/experience2.module';
import { Experience3Module } from './experiences/experience3/experience3.module';

import { Experience3Middleware } from './experiences/experience3/experience3.middleware'

@Module({
  imports: [Experience1Module, Experience2Module, Experience3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Experience3Middleware)
      .forRoutes('experience3');
  }
}
