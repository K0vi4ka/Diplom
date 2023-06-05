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
    console.log(comment)
    return await comment
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

  async getPublicationByPublicationId(publicationId) {
    const comments = await this.commenttopublicationRepository.findAll({include: [
      {
        model: Publication,
        where:{id:publicationId}
      },
    ]})
    return await comments
  }

  async getLastPublication(difference:number, publicationId:number) {
    if(difference < 0) {
      return await this.commenttopublicationRepository.findAll({include: [
        {
          model: Publication,
          where:{id:publicationId}
        },
      ]})
    }
    const comments = await this.commenttopublicationRepository.findAll({
      include: [
      {
        model: Publication,
      }],
      where: {publicId: publicationId},
      order: [['createdAt','DESC']],
      limit: difference
    })
    console.log(comments,difference,publicationId)
    return comments;

  }

  async deleteComment(commentId: number) {
    await this.commenttopublicationRepository.destroy({
      where: {
        commentId: commentId
      }
    })

    await this.commentRepository.destroy({
      where: {
        id: commentId
      }
    })
  }
}
