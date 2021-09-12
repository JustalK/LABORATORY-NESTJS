import { Injectable } from '@nestjs/common';
import { CreateExperience2Dto } from './dto/experience2.dto';

@Injectable()
export class Experience2Service {
  handleBody(experience2: CreateExperience2Dto): string {
    // Testing to get a param name
    const { name } = experience2;
    return name;
  }
}
