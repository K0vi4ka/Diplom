import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LikeValue } from 'src/like-value/like-value.model';
import { Publication } from 'src/publication/publication.model';
import { LikesController } from './likes.controller';
import { Likes } from './likes.model';
import { LikesService } from './likes.service';

@Module({
  controllers: [LikesController],
  providers: [LikesService],


  imports: [
    SequelizeModule.forFeature([Likes,LikeValue,Publication]),
  ],
})
export class LikesModule {}
