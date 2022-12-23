import { Controller,Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { NewsService } from 'src/news/news.service';
import { PublicationCreateDto } from './dto/publication-create.dto';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private publicationService: PublicationService){}

  @Get()
  async getAllPublication(){
    const publication = await this.publicationService.getAllPublicaton();
    const response = [];
    [...publication].forEach(item =>{
      if(item.news.newsName && item.category.value && item.user.nickname)
      response.push([item.news.newsName,item.category.value, item.user.nickname])
    })
    console.log(response)
    return response;
  }

  @Post()
  createPublication(@Body() dto: PublicationCreateDto){
    const publication =  this.publicationService.createPublication(dto)
    return publication
  }

  @Get('/user/:id')
  async getPublicationByAuthor(@Param("id") id:number){
    console.log(id)
    const publications = await this.publicationService.getPublicationByAuthor(id)
    const response = [];
    [...publications].forEach(item =>{
      if(item.news.newsName && item.category.value && item.user.nickname)
      response.push([item.news.newsName,item.category.value, item.user.nickname])
    })
    console.log(response)
    return response;
  }

  @Get('/category/:id')
  async getPublicationsByCategoryId(@Param("id") id:number) {
    const publications = await this.publicationService.getPublicationByCategory(id);
    const response = [];
    [...publications].forEach(item =>{
      if(item.news.newsName && item.category.value && item.user.nickname)
      response.push([item.news.newsName,item.category.value, item.user.nickname])
    })
    console.log(response)
    return response;
  }

  @Get('/news/:id') 
  async getPublicationByNewsId(@Param('id') newsId) {
    const publication = await this.publicationService.getPublicationByNewsId(newsId);
    const obj = await [...publication].map(item =>{
      return {
        "nickname":item.user.nickname,
        "newsName":item.news.newsName,
        "categoryName":item.category.value, 
        "updateDate":item.news.updatedAt
      }
    })
    return obj
  }

}
