import { Injectable } from '@nestjs/common'

@Injectable()
export class Experience16Service {

  uploadFile(file) {
    console.log(file)
    return 'Upload done !'
  }

  uploadFiles(files) {
    console.log(files)
    return 'Upload multi done !'
  }
}
