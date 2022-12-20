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

  @Get(':id')
  async getPublicationByAuthor(@Param("id") id:number){
    console.log(id)
    const publications = this.publicationService.getPublicationByAuthor(id)
    return publications;
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
  


}
