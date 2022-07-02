import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotoRepository } from './photos.repository';
import { Photo } from './entities/photo.entity';
export declare class PhotosService {
    private photoRepository;
    constructor(photoRepository: PhotoRepository);
    create(photo: CreatePhotoDto): Promise<Photo>;
    findAll(): Promise<(Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findSpaces(typeSpace: 'Intern' | 'Extern'): Promise<(Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(id: string, updatePhoto: UpdatePhotoDto): Promise<Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
