import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhotoDocument = Photo & Document;

//Schema para que o Mongoose consiga mapear a classe no MongoDB;
@Schema()
export class Photo {
    @Prop({required: true}) 
    url: string;
    @Prop({required: true})
    description: string;
    @Prop({required: true})
    typeSpace: string;    
}

//cria o Schema e exporta
export const PhotoSchema = SchemaFactory.createForClass(Photo)
