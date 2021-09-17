import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Experience1Module } from './experiences/experience1/experience1.module';
import { Experience2Module } from './experiences/experience2/experience2.module';
import { Experience3Module } from './experiences/experience3/experience3.module';
import { Experience4Module } from './experiences/experience4/experience4.module';
import { Experience5Module } from './experiences/experience5/experience5.module';
import { Experience6Module } from './experiences/experience6/experience6.module';
import { Experience7Module } from './experiences/experience7/experience7.module';
import { Experience8Module } from './experiences/experience8/cat.module';
import { Experience9Module } from './experiences/experience9/experience9.module';

import { Experience3Middleware } from './experiences/experience3/experience3.middleware'

@Module({
  imports: [
    Experience1Module,
    Experience2Module,
    Experience3Module,
    Experience4Module,
    Experience5Module,
    Experience6Module,
    Experience7Module,
    Experience8Module,
    Experience9Module,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb://root:smood2mongo@localhost:27017/admin')
  ],
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
