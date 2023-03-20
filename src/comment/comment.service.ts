import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Publication } from 'src/publication/publication.model';
import { User } from 'src/user/user.model';
import { Comment } from './comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreatePublicationCommentDto } from './dto/publication-comment.dto';
import { PublicComment } from './public-comment.model';

@Injectable()
export class CommentService {

  constructor(@InjectModel(Comment)private commentRepository: typeof Comment,
  @InjectModel(PublicComment)private commenttopublicationRepository: typeof PublicComment){}

  async createComment(dto: CreateCommentDto){ 
    const comment = await this.commentRepository.create(dto);
    //if(!comment) {throw new('ФАЙЛ УЖЕ ЕСТЬ, ДИБИЛ',HttpStatus.BAD_REQUEST)} 
    return comment
  }

  async createPublicationComment(commentId:number,publicationId:number) {
    console.log(publicationId,commentId)
    const publicatoinCommentDto =  new CreatePublicationCommentDto(commentId,publicationId)
    console.log(publicatoinCommentDto)
    const comment = await this.commenttopublicationRepository.create(publicatoinCommentDto)
    return comment;
  }

  async getCommentById(id){
    const comment = await this.commentRepository.findOne({where:{id},
    include:[{
      model: User
    }
    ]})
    return comment;
  }

  async getPublicationComment() {
    const comments = await this.commenttopublicationRepository.findAll({include: [
      {
        model: User,
      },
    ]})
    return comments
  }

  async getPublicationByPublication(publicationId) {
    const comments = await this.commenttopublicationRepository.findAll({include: [
      {
        model: Publication,
        where:{id:publicationId}
      },
    ]})
    return comments
  }
}
