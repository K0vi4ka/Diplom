import { Controller,Get,Post,Body, Param } from '@nestjs/common';
import { LinkednewsService } from './linkednews.service';
import { CreateLinkedNewsDto } from './dto/linked-news-create.dto';

@Controller('linkednews')
export class LinkednewsController {
  constructor(private linkedNewsService: LinkednewsService){}

  @Get("/all")
  async getAllLinkedNews() {
    return await this.linkedNewsService.getAllLinkedNews();
  }

  @Post("createLinkedNews")
  async createLinkedNews(@Body() linkedNewsDto: CreateLinkedNewsDto) {
    const linkedNews = await this.linkedNewsService.createLinkdeNews(linkedNewsDto)
    return await linkedNews;
  }

  @Get(":id")
  async getAllLinkedNewsById(@Param("id") id:number) {
    const linkedNews = await this.linkedNewsService.getAllLLinkedNewsById(id);
    return await linkedNews;
  }

}
