import { Injectable } from '@nestjs/common'

@Injectable()
export class Experience9Service {
  interceptor() {
    return 'You have access !';
  }
}
