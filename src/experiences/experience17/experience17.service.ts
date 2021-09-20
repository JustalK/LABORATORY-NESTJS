import { Injectable, Logger } from '@nestjs/common'
import { HttpService } from '@nestjs/axios';

@Injectable()
export class Experience17Service {
  constructor(private httpService: HttpService) {}

  async httpCall() {
    const { data } = await this.httpService.get('http://localhost:4000/experience1').toPromise();
    return data;
  }
}
