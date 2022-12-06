import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { JwtDto } from 'src/auth/dto/create-jwt.dto';
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
      tokenData.token = refreshToken 
      return tokenData.save();
    }

    const token = await this.tokenRepository.create({userId,token: refreshToken})
    return token;
  }
}
