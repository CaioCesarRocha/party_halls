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
exports.CreatePhotoDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePhotoDto {
}
__decorate([
    (0, class_validator_1.MaxLength)(80, {
        message: 'A description deve ter no máximo 80 caracteres',
    }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe se o espaço é Interno ou Externo',
    }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "typeSpace", void 0);
exports.CreatePhotoDto = CreatePhotoDto;
//# sourceMappingURL=create-photo.dto.js.map