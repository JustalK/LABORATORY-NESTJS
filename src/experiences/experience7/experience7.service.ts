import { Injectable } from '@nestjs/common'

@Injectable()
export class Experience7Service {
  interceptor() {
    return 'You have access !';
  }
}
