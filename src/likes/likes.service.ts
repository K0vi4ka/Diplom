import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLikesDto } from './dto/create-likes.dto';
import { Likes } from './likes.model';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Likes)private likesRepository: typeof Likes){}

  async createLikes(dto: CreateLikesDto){
    const likes = await this.likesRepository.create(dto);
    return likes;
  }
}
