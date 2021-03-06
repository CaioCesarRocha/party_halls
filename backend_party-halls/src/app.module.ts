import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PhotosModule,
    MongooseModule.forRoot(process.env.MONGODB_HOST, {
      dbName: process.env.MONGODB_DB_NAME,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
