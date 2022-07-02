import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotoRepository } from './photos.repository';
import { PhotosController } from './photos.controller';
import { Photo, PhotoSchema } from './entities/photo.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Photo.name, schema: PhotoSchema}])
  ],
  controllers: [PhotosController],
  providers: [PhotosService, PhotoRepository]
})
export class PhotosModule {}
