import { Controller } from '@nestjs/common';
import { LikesService } from './likes.service';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { CreateLikesDto } from './dto/create-likes.dto';
import { response } from 'express';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService){}

  @Post("/create")
  async createLikes(@Body() dto:CreateLikesDto){
    const likes = await this.likesService.createLikes(dto)
    return likes
  }

  @Get("public/:publicId")
  async getPublicationLikes(@Param("publicId") publicId:number){
    const likes = await this.likesService.getPublicationLikes(publicId);
    return likes;
  }

  @Get("users/:userId")
  async getUserLikes(@Param("userId") userId:number) {
    const likes = await this.likesService.getUserLikes(userId);
    return likes
  }


  @Post("havelike")
  async isUserHaveLike(@Body() dto: CreateLikesDto){
    const {publicId,userId} = dto;
    const likes = await this.likesService.isUserLikePublication(publicId,userId);
    console.log(await likes)
    if(await likes === null){
      return false
    }
    return true
  }

  @Post("/destroy")
  async deleteLike(@Body() dto: CreateLikesDto) {
    const like = await this.likesService.deleteLike(dto);
    return await like;
  }
}
