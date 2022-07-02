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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const photo_entity_1 = require("./entities/photo.entity");
let PhotoRepository = class PhotoRepository {
    constructor(photoModel) {
        this.photoModel = photoModel;
    }
    async create(photo) {
        const newPhoto = new this.photoModel(photo);
        return await newPhoto.save();
    }
    async findAll() {
        return this.photoModel.find();
    }
    async findSpaces(typeSpace) {
        return this.photoModel.find().where('typeSpace', typeSpace);
    }
    async update(id, updatePhoto) {
        return this.photoModel.findByIdAndUpdate({ _id: id, }, { $set: updatePhoto, }, { new: true, })
            .exec();
    }
    async remove(id) {
        return this.photoModel.deleteOne({ _id: id }).exec();
    }
};
PhotoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(photo_entity_1.Photo.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PhotoRepository);
exports.PhotoRepository = PhotoRepository;
//# sourceMappingURL=photos.repository.js.map