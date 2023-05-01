import { Controller,Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
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
      if(item.news.newsName && item.category.value && item.user.nickname){
        response.push([item.news.newsName,item.category.value, item.user.nickname,item.updatedAt])
      }
    })
    
    return response.reverse();
  }

  @Post()
  createPublication(@Body() dto: PublicationCreateDto){
    const publication =  this.publicationService.createPublication(dto)
    return publication
  }

  @Get('/user/:id')
  async getPublicationByAuthor(@Param("id") id:number){
    const publications = await this.publicationService.getPublicationByAuthor(id)
    const response = [];
    [...publications].forEach(item =>{
      if(item.news.newsName && item.category.value && item.user.nickname)
      response.push([item.news.newsName,item.category.value, item.user.nickname, item.updatedAt])
    })
    return response.reverse();
  }

  @Get('/category/:id')
  async getPublicationsByCategoryId(@Param("id") id:number) {
    const publications = await this.publicationService.getPublicationByCategory(id);
    const response = [];
    [...publications].forEach(item =>{
      if(item.news.newsName && item.category.value && item.user.nickname)
      response.push([item.news.newsName,item.category.value, item.user.nickname,item.updatedAt])
    })
    return response.reverse();
  }

  @Get('/news/:id') 
  async getPublicationByNewsId(@Param('id') newsId) {
    const publication = await this.publicationService.getPublicationByNewsId(newsId);
    const obj = await [...publication].map(item =>{
      return {
        "nickname": item.user.nickname,
        "newsName": item.news.newsName,
        "categoryName": item.category.value, 
        "updateDate": item.news.updatedAt
      }
    })
    return obj
  }

  @Get(':newsid')
  async getPublicationIdByNews(@Param('newsid') newsId:number) {
    const publication = await this.publicationService.getPublicationByNewsId(newsId);
    return  publication[0].id; 
  }

  @Get('/date/date')
  async getPublicationDate() {
    const publication = await this.publicationService.getAllPublicationDate();
    const set = new Set();
    await publication.forEach(item => {
      item = item + ""
      const dateArr = item.split(" ");
      set.add(dateArr[1]+"-"+dateArr[3]);
    })
    console.log()
    return [...set];
  }

  @Get("/date/:date")
  async getPublicationByDate(@Param("date") date:string) {
    const publication = await this.publicationService.getAllPublicaton();
    const publicData = await publication.filter(item => {
      const publicDate = item.updatedAt + ""
      const dateArr = publicDate.split(" ");
      console.log(publicDate+" "+date +" "+item)
      if(dateArr[1]+"-"+dateArr[3] === date && item.views > 30 ) {
        return item
      }
    })

    const response = [];
    [...publicData].forEach(item =>{
      if(item.news.newsName && item.category.value && item.user.nickname){
        response.push([item.news.newsName,item.category.value, item.user.nickname,item.updatedAt])
      }
    })
    
    return response.reverse();
  }

}
