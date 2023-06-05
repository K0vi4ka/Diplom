import { Controller,Post,Get,Param,Body,Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private commentsService: CommentService){}

  @Post(":publication")
  async createComment(@Body() dto: CreateCommentDto,@Param("publication") publication:number){
    try{
      const comment = await this.commentsService.createComment(dto);
      console.log(await comment);
      const commentPublication = await this.commentsService.createPublicationComment((await comment).id,publication)
      return commentPublication
    }
    catch(e){
      return e
    }
  }

  @Get("/:id")
  async getComment(@Param("id") id){
    return await this.commentsService.getCommentById(id);
  }

  @Get('publications')
  getAllComents() {
    const comments =  this.commentsService.getPublicationComment()
    console.log(comments)
    return comments

  }

  @Post('publication/getsome/isupdate')
  async checkNewComment(@Body() commentsInfo){
    const {publicationId,commentsLength} = commentsInfo;
    const nowComments = await this.commentsService.getPublicationByPublicationId(publicationId);
    const newCommentsLength = await nowComments.length;
    console.log(newCommentsLength, commentsLength)
    if(await newCommentsLength === commentsLength) throw new Error("Ошибка, данные отсутсвуют");
    const newComments = await this.commentsService.getLastPublication((await newCommentsLength) - commentsLength,publicationId);
    return await this.parseUserData(await newComments) 
  }

  @Get('publications/:publication')
    async getCommentsByPublicatoinId(@Param('publication') publicationId:number) {
    const comments = await this.commentsService.getPublicationByPublicationId(publicationId);
    return await this.parseUserData(await comments) 
  }

  private async parseUserData(comments) {
    const response = [];

    for(let item of comments) {
      const comment = await this.commentsService.getCommentById(item.commentId);
      const commentObj = {
        "id": comment.id,
        "user": comment.user.nickname,
        "value" : comment.value,
        "date":  comment.updatedAt,
      }
      response.push(commentObj)
    }
    
    return response
  }

  @Delete("delete/:commentId") 
  async deleteComment(@Param("commentId") commentId:number) {
    return await this.commentsService.deleteComment(commentId);
  }
}
