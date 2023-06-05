import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UnconfirmUser } from './unconfirm_user_model';
import {UnconfirmCreateDto} from './.dto/unconfirm-user-create.dto'

@Injectable()
export class UnconfirmUserService {
  constructor(@InjectModel(UnconfirmUser) private unconfimrUserRepository: typeof UnconfirmUser ){}


  async createUnconfirmUser(dto: UnconfirmCreateDto) {  
    const user = await this.unconfimrUserRepository.create(dto);
    
    return await user
  }

  async confirmUser(token: string) {
    const user = await this.unconfimrUserRepository.findOne({where: {
      token : token
    }})
    const userId = await user.userId;

    const deleted = await this.unconfimrUserRepository.destroy({
      where: {
        userId: userId
      }
    })
    return await deleted;
  }

  async getUserToken(userId: number){
    const token = await this.unconfimrUserRepository.findOne({where: {
      userId:userId
    }});
    return await token.token;
  }

  async isUserConfirm(userId: number) {
    const user = await this.unconfimrUserRepository.findOne({where: {
      userId: userId
    }})
    return user
  }
}
