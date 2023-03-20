import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LikeValue } from './like-value.model';
import {CreateLikeValueDto} from './.dto/create-likeValue.dto'

@Injectable()
export class LikeValueService {
  constructor(@InjectModel(LikeValue)private likeValueReposytory: typeof LikeValue){}

  async createLikeValue(dto :CreateLikeValueDto) {
    const likeValue = await this.likeValueReposytory.create(dto);
    return likeValue;
  }

}
