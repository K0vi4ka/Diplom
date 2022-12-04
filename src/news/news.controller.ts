import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NewsCreateDto } from './dto/news-create.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

  constructor(private newsService: NewsService){}

  @Get("/:id")
  getNewsById(@Param("id") id){
    return this.newsService.getNewsById(id)
  }

  @Post()
  createNews(@Body() dto: NewsCreateDto){
    return this.newsService.createNews(dto)
  }
}
