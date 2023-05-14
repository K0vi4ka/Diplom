import { Controller,Get,Post, Body } from '@nestjs/common';
import { response } from 'express';
import { TokenService } from './token.service';


@Controller('token')
export class TokenController {
  constructor(private tokenService: TokenService){}

  @Post()
  async getUserByToken(@Body() token){
    const {myToken} = token;
    const user = await this.tokenService.findUserByToken(myToken);
    return await user
  }
}
