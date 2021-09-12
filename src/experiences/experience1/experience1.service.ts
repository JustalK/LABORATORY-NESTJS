import { Injectable } from '@nestjs/common';

@Injectable()
export class Experience1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
