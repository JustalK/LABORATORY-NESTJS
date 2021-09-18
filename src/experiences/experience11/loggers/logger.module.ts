import { Module } from '@nestjs/common';
import { MyPersonnalLogger } from './logger.service';

@Module({
  providers: [MyPersonnalLogger],
  exports: [MyPersonnalLogger],
})
export class LoggerModule {}
