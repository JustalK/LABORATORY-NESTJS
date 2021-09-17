import { Injectable } from '@nestjs/common'

@Injectable()
export class Experience10Service {
  interceptor() {
    return 'You have access !';
  }
}
