/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    create(createPhotoDto: CreatePhotoDto): Promise<import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): import("mongoose").Query<(import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/photo.entity").PhotoDocument>;
    findSpaces(typeSpace: string): import("mongoose").Query<(import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/photo.entity").PhotoDocument>;
    update(id: string, updatePhotoDto: UpdatePhotoDto): Promise<import("./entities/photo.entity").Photo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
