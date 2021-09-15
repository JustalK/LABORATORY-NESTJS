import { Injectable } from '@nestjs/common'

@Injectable()
export class Experience6Service {
  guarded() {
    return 'You have access !';
  }
}
