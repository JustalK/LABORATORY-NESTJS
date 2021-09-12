import { Injectable } from '@nestjs/common';

@Injectable()
export class Experience3Service {
  triggerMiddleware() {
    return 'Middleware triggered'
  }
}
