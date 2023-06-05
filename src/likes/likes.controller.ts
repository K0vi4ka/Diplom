import { Controller } from '@nestjs/common';
import { LikesService } from './likes.service';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { CreateLikesDto } from './dto/create-likes.dto';

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

  @Get("/statistics/:date")
  async getUsersStatiscits(@Param("date") date:string) {
    console.log('work')
    const likes = await this.likesService.getUsersLike();
    console.log(date)
    const likesForDate = await likes.filter(item => {

      const likesDate = item.createdAt + "";
      console.log(likesDate)
      const dateArr = likesDate.split(" ");

      if(dateArr[1]+"-"+dateArr[3] === date) {
        return item
      }
    })
    console.log(await likesForDate)
    return await likesForDate;
  }

  @Post("statistics/likecount/count")
  async getUsersCategoryLike(@Body() obj){
    const {date,categoryId} = obj;
    console.log(date)
    let dateNow = new Date(date);
    console.log(dateNow)
    let getYear = dateNow.getFullYear();
    let getMonth = dateNow.getMonth();
    let startDate = new Date(getYear, getMonth, 1); 
    let stopDate = new Date(startDate);
    stopDate.setMonth(startDate.getMonth() + 1);
 

    const likes = await this.likesService.getUserLikeCount(categoryId,startDate,stopDate);
    return await likes;
  }

  @Post("statistics/active/users")
  async getTopActiveUser(@Body() obj) {
    console.log('work')
    const date = obj.date;
    console.log(date)
    let dateNow = new Date(date);
    let getYear = dateNow.getFullYear();
    let getMonth = dateNow.getMonth();
    let startDate = new Date(getYear, getMonth, 1); 
    let stopDate = new Date(startDate);
    stopDate.setMonth(startDate.getMonth() + 1);
    const buffUser =  await this.likesService.getActiveUserForDate(startDate,stopDate)
    const users = new Set();
    buffUser.forEach(item => {
      users.add(item.userId);
    })
    return [...users]
  }

  @Post("statistics/active/users/counts")
  async getTopUsersLikesCount(@Body() obj) {
    console.log('work')
    const {userId,date} = obj;
    console.log(date)
    let dateNow = new Date(date);
    let getYear = dateNow.getFullYear();
    let getMonth = dateNow.getMonth() ;
    let startDate = new Date(getYear, getMonth, 1); 
    let stopDate = new Date(startDate);
    stopDate.setMonth(startDate.getMonth() + 1);
    const usersStats = await this.likesService.getTopUsers(userId,startDate,stopDate);
    console.log(await usersStats)
    return await usersStats;
  }
}
