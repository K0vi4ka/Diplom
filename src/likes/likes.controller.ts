import { Controller } from '@nestjs/common';
import { LikesService } from './likes.service';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateLikesDto } from './dto/create-likes.dto';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService){}

  @Post("/create")
  async createLikes(@Body() dto:CreateLikesDto){
    const likes = await this.likesService.createLikes(dto)
    return likes
  }
}
