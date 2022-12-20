import { Body, Controller, Get, Param, Post, } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { NewsCreateDto } from './dto/news-create.dto';
import { NewsService } from './news.service';


@Controller('news')
export class NewsController {

  constructor(private newsService: NewsService){}

  @Get("/:id")
  getNewsById(@Param("id") id){
    return this.newsService.getNewsById(id)
  }

  @Post('create-news')
  createNews(@Body() dto){
    try{
      const {newsName,filePath,data} = dto
      return this.newsService.createNews(filePath,newsName,data)
    }
    catch(e){
      throw new HttpException('ФАЙЛ УЖЕ ЕСТЬ, ДИБИЛ', HttpStatus.BAD_REQUEST);
    }
  }
}
