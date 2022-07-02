import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  create(@Body(ValidationPipe) createPhoto: CreatePhotoDto) {
    return this.photosService.create(createPhoto);
  }

  @Get()
  findAll() {
    return this.photosService.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(id);
  }*/

  @Get(':typeSpace')
  findSpaces(@Param('typeSpace') typeSpace: 'Intern' | 'Extern'){
    return this.photosService.findSpaces(typeSpace)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhoto: UpdatePhotoDto) {
    return this.photosService.update(id, updatePhoto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(id);
  }
}
