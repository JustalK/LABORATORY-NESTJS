import { Injectable, Logger } from '@nestjs/common'
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class Experience15Service {
  constructor(private eventEmitter: EventEmitter2) {}


  dispatchEvent() {
    this.eventEmitter.emit(
      'experience15.test',
      {
        orderId: 1,
        payload: {},
      }
    )
    return 'Event Dispatched !'
  }

  @OnEvent('experience15.test')
  handleOrderCreatedEvent(payload) {
    console.log('Event Received !')
  }
}
