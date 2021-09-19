import { Injectable } from '@nestjs/common'

@Injectable()
export class Experience12Service {

  create(response) {
    response.cookie('test', 'kevin');
    return 'You create a cookie !';
  }

  find(request) {
    return request.cookies;
  }
}
