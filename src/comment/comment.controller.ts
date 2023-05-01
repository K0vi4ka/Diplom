import { Controller,Post,Get,Param,Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private commentsService: CommentService){}

  @Post(":publication")
  async createComment(@Body() dto: CreateCommentDto,@Param("publication") publication:number){
    try{
      console.log(publication)
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

  @Get('publications/:publication')
    async getCommentsByPublicatoinId(@Param('publication') publicationId:number) {
    console.log(publicationId)
    const comments = await this.commentsService.getPublicationByPublication(publicationId);
    console.log(await comments)
    return await this.parseUserData(await comments) 
  }

  private async parseUserData(comments) {
    const response = [];

    for(let item of comments) {
      const comment = await this.commentsService.getCommentById(item.commentId);
      const commentObj = {
        "user": comment.user.nickname,
        "value" : comment.value,
        "date":  comment.updatedAt,
      }
      response.push(commentObj)
    }
    
    return response
    
  }
}
