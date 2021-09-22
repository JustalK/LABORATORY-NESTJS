import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class Experience19Service {
  val = 0;

  constructor(val) {
    this.val = val
  }

  async getValue() {
    return this.val
  }
}
