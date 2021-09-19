import { Injectable } from '@nestjs/common'
import { Experience13Dto } from './dto/experience13.dto'

@Injectable()
export class Experience13Service {

  serialization() {
    return new Experience13Dto({
      id: 1,
      firstName: 'Kamil',
      lastName: 'Mysliwiec',
      password: 'password',
    });
  }
}
