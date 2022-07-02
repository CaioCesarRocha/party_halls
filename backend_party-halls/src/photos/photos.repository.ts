import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Photo, PhotoDocument } from './entities/photo.entity';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotoRepository {
    constructor(
        @InjectModel(Photo.name) //usado para fazer a injeção de dependencias
        private photoModel: Model<PhotoDocument> // no caso esta injetando o UserDocument vindo do entitiy
    ) {}

    async create(photo: Photo): Promise<Photo> {
        const newPhoto = new this.photoModel(photo);
        return await newPhoto.save();
    }

    async findAll(){
        return this.photoModel.find();
    }

    /*async findOne(id: string){
        return this.photoModel.findById(id)
    }*/

    async findSpaces(typeSpace: 'Intern' | 'Extern'){
        return this.photoModel.find().where('typeSpace', typeSpace)
    }

    async update(id, updatePhoto: UpdatePhotoDto){
        return this.photoModel.findByIdAndUpdate(
            { _id: id, },
            { $set: updatePhoto, },
            { new: true, },
        )
        .exec()
    }

    async remove(id){
        return this.photoModel.deleteOne({_id: id}).exec();
    }
}
