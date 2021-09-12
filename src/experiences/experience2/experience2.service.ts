import { Injectable } from '@nestjs/common';

@Injectable()
export class Experience2Service {
  getHello(): string {
    return 'Hello World3!';
  }
}
