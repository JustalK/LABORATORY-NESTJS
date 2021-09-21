import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class Experience18Service {
  async countSession(request) {
    request.session.visits = request.session.visits ? request.session.visits + 1 : 1;
    return request.session.visits;
  }
}
