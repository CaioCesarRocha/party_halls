"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosService = void 0;
const common_1 = require("@nestjs/common");
const photos_repository_1 = require("./photos.repository");
let PhotosService = class PhotosService {
    constructor(photoRepository) {
        this.photoRepository = photoRepository;
    }
    async create(photo) {
        const createdPhoto = await this.photoRepository.create(photo);
        return createdPhoto;
    }
    async findAll() {
        const allPhotos = await this.photoRepository.findAll();
        return allPhotos;
    }
    async findSpaces(typeSpace) {
        const photoSpace = await this.photoRepository.findSpaces(typeSpace);
        return photoSpace;
    }
    async update(id, updatePhoto) {
        const photoUpdate = await this.photoRepository.update(id, updatePhoto);
        return photoUpdate;
    }
    async remove(id) {
        const photoRemoved = await this.photoRepository.remove(id);
        return photoRemoved;
    }
};
PhotosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [photos_repository_1.PhotoRepository])
], PhotosService);
exports.PhotosService = PhotosService;
//# sourceMappingURL=photos.service.js.map