import { Injectable } from '@nestjs/common'
import { MyPersonnalLogger } from './loggers/logger.service';

@Injectable()
export class Experience11Service {
  constructor(private myLogger: MyPersonnalLogger) {
    this.myLogger.setContext('Experience11');
  }

  test() {
    // You can call all the default methods
    this.myLogger.warn('Experience 11 Get!');
    // And your custom methods
    this.myLogger.customLog();
    return 'You have access !';
  }
}
