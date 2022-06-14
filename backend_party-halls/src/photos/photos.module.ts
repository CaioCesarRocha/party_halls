import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { Photo, PhotoSchema } from './entities/photo.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Photo.name, schema: PhotoSchema}])
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
