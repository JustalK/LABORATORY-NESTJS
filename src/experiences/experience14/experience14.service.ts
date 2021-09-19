import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'

@Injectable()
export class Experience14Service {
  private readonly logger = new Logger(Experience14Service.name);

  @Cron('1-5 * * * * *')
  cron() {
    this.logger.debug('Called when the current second is 1 to 5');
  }
}
