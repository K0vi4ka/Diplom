import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LinkdedNews } from './linkednews.model';
import { CreateLinkedNewsDto } from './dto/linked-news-create.dto';
import { Category } from 'src/category/category-model';
import { LinkeSource } from 'src/linkesource/linkesource-model';

@Injectable()
export class LinkednewsService {
  constructor(@InjectModel(LinkdedNews) private linkednewsService: typeof LinkdedNews){}

  async createLinkdeNews(linkedNewsDto: CreateLinkedNewsDto) {
    console.log(linkedNewsDto.title.length)
    const linkedNews = await this.linkednewsService.create(linkedNewsDto);
    return linkedNews;
  }

  async getAllLinkedNews() {
    const linkedNews = await this.linkednewsService.findAll({
      include: [
        {model: Category},
        {model: LinkeSource}
      ]
    });
    return await linkedNews;
  }

  async getAllLLinkedNewsById(categoryId) {
    const linkedNews = await this.linkednewsService.findAll({
      include: [
        {model: Category,},
        {model: LinkeSource}
      ],
      where: {categoryId:categoryId}
    })
    return await linkedNews
  }
}
