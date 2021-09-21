import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { Experience1Module } from './experiences/experience1/experience1.module';
import { Experience2Module } from './experiences/experience2/experience2.module';
import { Experience3Module } from './experiences/experience3/experience3.module';
import { Experience4Module } from './experiences/experience4/experience4.module';
import { Experience5Module } from './experiences/experience5/experience5.module';
import { Experience6Module } from './experiences/experience6/experience6.module';
import { Experience7Module } from './experiences/experience7/experience7.module';
import { Experience8Module } from './experiences/experience8/cat.module';
import { Experience9Module } from './experiences/experience9/experience9.module';
import { Experience10Module } from './experiences/experience10/experience10.module';
import { Experience11Module } from './experiences/experience11/experience11.module';
import { Experience12Module } from './experiences/experience12/experience12.module';
import { Experience13Module } from './experiences/experience13/experience13.module';
import { Experience14Module } from './experiences/experience14/experience14.module';
import { Experience15Module } from './experiences/experience15/experience15.module';
import { Experience16Module } from './experiences/experience16/experience16.module';
import { Experience17Module } from './experiences/experience17/experience17.module';
import { Experience18Module } from './experiences/experience18/experience18.module';

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
    Experience10Module,
    Experience11Module,
    Experience12Module,
    Experience13Module,
    Experience14Module,
    Experience15Module,
    Experience16Module,
    Experience17Module,
    Experience18Module,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb://root:smood2mongo@localhost:27017/admin'),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({  // set this to `true` to use wildcards
      wildcard: false,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: false,
      // set this to `true` if you want to emit the removeListener event
      removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: false,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    })
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
