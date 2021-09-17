import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Cat, CatSchema } from './schemas/cat.schema';

/**
* For using the simple version of the schema, do it like this
* schema: CatSchema
**/
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Cat.name,
        useFactory: () => {
          const schema = CatSchema;
          schema.pre('save', function() { console.log('Hello from pre save') });
          return schema;
        },
      },
    ]),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class Experience8Module {}
