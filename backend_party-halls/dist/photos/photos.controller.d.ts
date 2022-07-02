import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    create(createPhoto: CreatePhotoDto): Promise<import("./entities/photo.entity").Photo>;
    findAll(): Promise<(import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findSpaces(typeSpace: 'Intern' | 'Extern'): Promise<(import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(id: string, updatePhoto: UpdatePhotoDto): Promise<import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
