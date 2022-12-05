import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publication } from './publication.model';
import { Comment } from 'src/comment/comment.model';
import { PublicComment } from 'src/comment/public-comment.model';
import { News } from 'src/news/news.model';
import { User } from 'src/user/user.model';
import { Category } from 'src/category/category-model';

@Module({
  providers: [PublicationService],
  controllers: [PublicationController],

  imports: [
    SequelizeModule.forFeature([Publication,Comment,PublicComment,News,User,Category])
  ]
})
export class PublicationModule {}
