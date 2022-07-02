import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

import { PhotoRepository } from './photos.repository';
import { Photo, } from './entities/photo.entity';


@Injectable()
export class PhotosService {
  constructor(private photoRepository: PhotoRepository) {}

  async create(photo: CreatePhotoDto): Promise<Photo> {
    const createdPhoto = await this.photoRepository.create(photo);
    return createdPhoto
  }

  async findAll() {
    const allPhotos = await this.photoRepository.findAll();
    return allPhotos
  }

  /*async findOne(id: string){
    const onePhoto = await this.photoRepository.findOne(id);
    return onePhoto
  }*/

  async findSpaces(typeSpace: 'Intern' | 'Extern'){
    const photoSpace = await this.photoRepository.findSpaces(typeSpace);
    return photoSpace
  }

  async update(id: string, updatePhoto: UpdatePhotoDto) {
    const photoUpdate = await this.photoRepository.update(id, updatePhoto)
    return photoUpdate
  }


  async remove(id: string){
    const photoRemoved = await this.photoRepository.remove(id);
    return photoRemoved
  }

}
