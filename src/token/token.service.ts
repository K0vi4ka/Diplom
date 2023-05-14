import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { JwtDto } from 'src/auth/dto/create-jwt.dto';
import { ApiError } from 'src/exceptions/api-error';
import { User } from 'src/user/user.model';
import { Token } from './token.model';

@Injectable()
export class TokenService {

  constructor(@InjectModel(Token) private tokenRepository: typeof Token
  ,private jwtService: JwtService){}
  
  async generateToken(user :JwtDto){
    const payload = {id: user.id,email: user.email}
    const accessToken = this.jwtService.sign(payload,{expiresIn:"24h"})
    const refreshToken = this.jwtService.sign(payload,{expiresIn:"30d"})

    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(userId,refreshToken){
    const tokenData = await this.tokenRepository.findOne({where:userId})
    if(tokenData){
      await this.tokenRepository.update({token: refreshToken},{
        where: {
          userId: userId
        }
      })
      return tokenData.save();
    }

    const token = await this.tokenRepository.create({userId,token: refreshToken})
    return token;
  }

  async deleteOne(refreshToken){
    const tokenData = await this.tokenRepository.findOne({where:refreshToken});
    if(!tokenData){
      return ApiError.BadRequst("Ошибка выхода");
    }

    await this.tokenRepository.destroy(refreshToken)
  }

  async findUserByToken(accessToken){
    try{
      const user = await this.tokenRepository.findOne({
        where: {
          token: accessToken
        }
      })

      return await user
    }
    catch(e){

    }
      
  }
}
