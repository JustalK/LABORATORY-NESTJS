import { Injectable } from '@nestjs/common';
import { Experience5DTO } from './dto/experience5.dto'

@Injectable()
export class Experience5Service {

  useless(id) {
    return id;
  }

  create(experience5DTO: Experience5DTO) {
    return experience5DTO;
  }
}
