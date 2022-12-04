import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NewsCreateDto } from './dto/news-create.dto';
import { News } from './news.model';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newstRepository: typeof News){}

  async createNews(dto: NewsCreateDto){
    const news = await this.newstRepository.create(dto)
    return news;
  }

  async getNewsById(id){
    const news = await this.newstRepository.findOne({where:{id}})
  }

  
}
