import { Injectable, Logger } from '@nestjs/common'
import { Cron, Interval, Timeout, SchedulerRegistry } from '@nestjs/schedule'
import { CronJob } from 'cron'

@Injectable()
export class Experience14Service {
  private readonly logger = new Logger(Experience14Service.name);
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  @Cron('0-59 * * * * *', {
    name: 'notifications'
  })
  cron() {
    // this.logger.debug('Called when the current second is 0 to 59');
  }

  @Interval(1000)
  interval() {
    // this.logger.debug('Interval every second');
  }

  @Timeout(1000)
  handleTimeout() {
    this.logger.debug('Called once after 1 second');
  }

  createCronDynamic() {
    const job = new CronJob(`* * * * * *`, () => {
      this.logger.warn(`time every second for job test to run!`);
    });

    this.schedulerRegistry.addCronJob('test', job);
    job.start();
  }

  stopCronDynamic() {
    const job = this.schedulerRegistry.getCronJob('test');

    job.stop();
    console.log(job.lastDate());
    return 'test'
  }

  startCronDynamic() {
    const job = this.schedulerRegistry.getCronJob('test');

    job.start();
    console.log(job.lastDate());
    return 'test'
  }
}
