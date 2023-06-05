import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLikesDto } from './dto/create-likes.dto';
import { Likes } from './likes.model';
import { User } from 'src/user/user.model';
import { and, where } from 'sequelize';
import { Op } from 'sequelize';
import { Publication } from 'src/publication/publication.model';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Likes)private likesRepository: typeof Likes){}

  async createLikes(dto: CreateLikesDto){
    console.log(dto)
    const likes = await this.likesRepository.create(dto);
    return likes;
  }

  async getUsersLike() {
    const likes = await this.likesRepository.findAll();
    return likes;
  }

  async deleteLike(dto:CreateLikesDto) {
    try {
      const like = await this.likesRepository.destroy({where: 
        {userId:dto.userId,publicId:dto.publicId},
      })
      return true;
    }
    catch{
      return false;
    }
  }

  async getUserLikeCount(categotyId,startDate,stopDate) {
    const likes = await this.likesRepository.count({
      include: [
        {
          model: Publication,
          where: {categoryId: categotyId}
        }
      ],
      where: {
        createdAt: 
        {
          [Op.between] :  [startDate,stopDate]
        }
      }
    })
    return await likes;
  }

  async getPublicationLikes(publicationId:number) {
    const likes = await this.likesRepository.findAll({where:{
      publicId:publicationId
    }})
    return likes.length;
  }

  async getUserLikes(userId:number) {
    const likes = await this.likesRepository.findAll({where:{userId:userId},
      include:[
        {model:Publication} 
      ]
    })
    return likes;
  }

  async isUserLikePublication(publicationId:number,userId:number){
    const likes = await this.likesRepository.findOne({where: {
      publicId: publicationId,
      userId: userId
    }})
    return await likes
  }

  async getActiveUserForDate(startDate,stopDate) {
    const users = await this.likesRepository.findAll({
      where: {
        createdAt: 
        {
          [Op.between] :  [startDate,stopDate]
        },
      },
      limit: 3
    });
    return users;
  }

  async getTopUsers(userId,startDate,stopDate){
    const count = await this.likesRepository.count({
        where: {
          userId: userId,
          createdAt: 
          {
            [Op.between] :  [startDate,stopDate]
          },
        }
      })
      const obj = {"user": await userId, "count": await count}
      return obj
  }    
}
