import { Controller, ClassSerializerInterceptor, Post, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common'
import { Express } from 'express'
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express'
import { Experience16Service } from './experience16.service'

@Controller('experience16')
export class Experience16Controller {
  constructor(private readonly experience16Service: Experience16Service) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.experience16Service.uploadFile(file);
  }

  @Post('uploads')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'avatar', maxCount: 1 },
    { name: 'background', maxCount: 1 },
  ]))
  uploadFiles(@UploadedFiles() files: { avatar?: Express.Multer.File[], background?: Express.Multer.File[] }) {
    return this.experience16Service.uploadFiles(files);
  }
}
