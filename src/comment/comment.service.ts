import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {

  constructor(@InjectModel(Comment)private commentRepository: typeof Comment){}

  async createComment(dto: CreateCommentDto){
    const comment = await this.commentRepository.create(dto);
    return comment
  }

  async getCommentById(id){
    const comment = await this.commentRepository.findOne({where:{id}})
    return comment;
  }
}
