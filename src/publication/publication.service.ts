import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/category/category-model';
import { News } from 'src/news/news.model';
import { User } from 'src/user/user.model';
import { PublicationCreateDto } from './dto/publication-create.dto';
import { Publication } from './publication.model';

@Injectable()
export class PublicationService {
  constructor(@InjectModel(Publication) private publicationRepository: typeof Publication){}

  async getAllPublicaton(){
    const response = await this.publicationRepository.findAll({
      include: [
        {
        model: User,
        }, 
        {
          model: News
        },
        {
          model: Category
        }
    ]
    });

    return response
  }

  async getPublicationByAuthor(id: number){
    const response = await this.publicationRepository.findAll({
      include: [
        {
        model: User,
        where:{Id:id}
        }, 
        {
          model: News
        },
        {
          model: Category
        },
    ], 
    });

    return response;
  }

  async getPublicationByCategory(id: number){
    const response = await this.publicationRepository.findAll({
      include: [
        {
        model: User
        }, 
        {
          model: News
        },
        {
          model: Category,
          where:{Id:id}
        },
    ], 
    });

    return response;
  }

  async getPublicationByNewsId(id: number){
    const response = await this.publicationRepository.findAll({
      include: [
        {
        model: User
        }, 
        {
          model: News,
          where:{Id:id}
        },
        {
          model: Category
        },
    ], 
    });

    return response;
  }

  async createPublication(publicationDto: PublicationCreateDto){
    return await this.publicationRepository.create(publicationDto);
  }
}
