import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

import { Photo, PhotoDocument } from './entities/photo.entity';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PhotosService {
  constructor(
    @InjectModel(Photo.name) //usado para fazer a injeção de dependencias
    private photoModel: Model<PhotoDocument> // no caso esta injetando o UserDocument vindo do entitiy
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    const photo = new this.photoModel(createPhotoDto);
    return photo.save();
  }

  findAll() {
    return this.photoModel.find();
  }

  findOne(id: string) {
    return this.photoModel.findById(id)
  }

  update(id: string, updatePhotoDto: UpdatePhotoDto) {
    return this.photoModel.findByIdAndUpdate(
      { _id: id, },
      { $set: updatePhotoDto, },
      { new: true, },
    )
    .exec();
  }

  remove(id: string) {
    return this.photoModel.deleteOne({_id: id}).exec();
  }
}
