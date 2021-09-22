import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Experience19Controller } from './experience19.controller';
import { Experience19Service } from './experience19.service';

const factoryProvider = {
  provide: 'CONNECTION',
  useFactory: () => {
    return new Experience19Service(30);
  },
};

@Module({
  controllers: [Experience19Controller],
  providers: [factoryProvider],
  exports: ['CONNECTION']
})
export class Experience19Module {}
