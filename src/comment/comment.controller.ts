import { Controller,Post,Get,Param,Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private commnetsService: CommentService){}

  @Post()
  createComment(@Body() dto: CreateCommentDto){
    return this.commnetsService.createComment(dto)
  }

  @Get("/:id")
  getComment(@Param("id") id){
    return this.commnetsService.getCommentById(id);
  }



}
