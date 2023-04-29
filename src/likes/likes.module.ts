import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publication } from 'src/publication/publication.model';
import { LikesController } from './likes.controller';
import { Likes } from './likes.model';
import { LikesService } from './likes.service';
import { User } from 'src/user/user.model';

@Module({
  controllers: [LikesController],
  providers: [LikesService],


  imports: [
    SequelizeModule.forFeature([Likes,Publication,User]),
  ],
})
export class LikesModule {}
