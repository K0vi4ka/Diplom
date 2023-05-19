import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/category/category-model';
import { News } from 'src/news/news.model';
import { User } from 'src/user/user.model';
import { PublicationCreateDto } from './dto/publication-create.dto';
import { Publication } from './publication.model';
import { Op } from 'sequelize';
import { Likes } from 'src/likes/likes.model';
import { Comment } from 'src/comment/comment.model';
import { PublicComment } from 'src/comment/public-comment.model';

@Injectable()
export class PublicationService {
  constructor(@InjectModel(Publication) private publicationRepository: typeof Publication,
  @InjectModel(News) private newsRepository: typeof News,
  @InjectModel(Likes) private likeRepository: typeof Likes,
  @InjectModel(Comment) private commentRepository: typeof Comment,
  @InjectModel(PublicComment) private publicCommentRepository: typeof PublicComment){}

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
    return await response
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
    try{
      console.log(publicationDto)
      const responce = await this.publicationRepository.create(publicationDto);
      return await responce
    }
    catch(e){
      throw new Error(e)
    }
  }

  async getAllPublicationDate() {
    const publication =  await this.publicationRepository.findAll()
    return await publication.map(item => item.updatedAt); 
  }

  async getUsersAmoungViewsForDate(startDate,stopDate) {
    const publication = await this.publicationRepository.sum('views',{where: {
      createdAt: {
        [Op.between] : [startDate,stopDate]
      }
    }})
    return await publication
  }

  async getPopularPublicationByViews(startDate,stopDate) {
    const publication = await this.publicationRepository.findAll({
      where: {
        createdAt: {
          [Op.between] : [startDate,stopDate]
        }
      }
    })

    return await publication;
  }

  async deletePublication(newsId: number) {
    const publicId = await this.publicationRepository.findOne({
      where: {
        newsId:newsId
      }
    })

    const comment = await this.publicCommentRepository.destroy({ 
      where: {
        publicId: publicId.id
      }
    })

    await this.likeRepository.destroy({
      where: {
        publicId: publicId.id
      }
    })
    await this.publicationRepository.destroy({
      where: {
        newsId: newsId
      }
    })
    await this.newsRepository.destroy({
      where: {
        id:newsId
      }
    })

  }

  async updatePublicationViews(publicationId:number) {
    const publication = await this.publicationRepository.findOne({
      where: {
        id: publicationId
      }
    })
    const publicationViews = await publication.views + 1
    await this.publicationRepository.update({
      views: publicationViews 
    },{
      where: {
        id: publicationId
      }
    })
  }

}
