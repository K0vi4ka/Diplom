import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLikesDto } from './dto/create-likes.dto';
import { Likes } from './likes.model';
import { User } from 'src/user/user.model';
import { where } from 'sequelize';
import { Publication } from 'src/publication/publication.model';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Likes)private likesRepository: typeof Likes){}

  async createLikes(dto: CreateLikesDto){
    console.log(dto)
    const likes = await this.likesRepository.create(dto);
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
    console.log(publicationId,userId)
    const likes = await this.likesRepository.findOne({where: {
      publicId: publicationId,
      userId: userId
    }})
    return await likes
  }
}
