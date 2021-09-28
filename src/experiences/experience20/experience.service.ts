import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class ExperienceService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async getHello(): Promise<string> {
    // Get the module in a lazy way
    const { ExperienceModule } = await import('./lazy/experience.module');
    const moduleRef = await this.lazyModuleLoader.load(() => ExperienceModule);

    // Get the service of the module once loaded
    const { LazyService } = await import('./lazy/experience.service');
    const lazyRef = moduleRef.get(LazyService);

    console.log(lazyRef.getHello());
    return 'Hello World!';
  }
}
