import { Model } from 'mongoose';
import { Photo, PhotoDocument } from './entities/photo.entity';
import { UpdatePhotoDto } from './dto/update-photo.dto';
export declare class PhotoRepository {
    private photoModel;
    constructor(photoModel: Model<PhotoDocument>);
    create(photo: Photo): Promise<Photo>;
    findAll(): Promise<(Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findSpaces(typeSpace: 'Intern' | 'Extern'): Promise<(Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(id: any, updatePhoto: UpdatePhotoDto): Promise<Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: any): Promise<import("mongodb").DeleteResult>;
}
