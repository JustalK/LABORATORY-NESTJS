import { ConsoleLogger } from '@nestjs/common';

export class MyLogger extends ConsoleLogger {
  error(message: any, stack?: string, context?: string) {
    // add your tailored logic here
    super.error.apply(this, arguments);
  }

  log(message: any, ...optionalParams: any[]) {
    // console.log('This is a new call')
    super.log.apply(this, arguments);
  }
}
