import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LinkdedNews } from './linkednews.model';
import { CreateLinkedNewsDto } from './dto/linked-news-create.dto';
import { Category } from 'src/category/category-model';
import { LinkeSource } from 'src/linkesource/linkesource-model';
import { HttpService } from '@nestjs/axios/dist';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LinkednewsService {
  constructor(@InjectModel(LinkdedNews) private linkednewsService: typeof LinkdedNews,
  private readonly httpService: HttpService){}

  async createLinkdeNews(linkedNewsDto: CreateLinkedNewsDto) {
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

  async getLinkContent(id) {
    const linked = await this.linkednewsService.findOne({
      where : {id: id}
    })
    const res =  await firstValueFrom(this.httpService.get(await linked.link));
    return await res.data;
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
