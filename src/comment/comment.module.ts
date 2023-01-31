import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './comment.model';
import { Publication } from 'src/publication/publication.model';
import { PublicComment } from './public-comment.model';
import { User } from 'src/user/user.model';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [CommentService],
  controllers: [CommentController],

  imports: [
    SequelizeModule.forFeature([User,Comment,Publication,PublicComment]),
  ],

  exports:[
    CommentService
  ]
})
export class CommentModule {}
