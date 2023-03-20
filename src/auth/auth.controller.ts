import { Controller, Post, Body, UnauthorizedException} from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { request, response } from 'express';
import { AuthDto } from 'src/roles/dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { AuthService } from './auth.service'; 
import {Response,Request,NextFunction} from 'express'
import { ApiError } from 'src/exceptions/api-error';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}

  @Post('/login')
  async login(request,response,@Body() attr: AuthDto){
    try{
      const {email, password} = attr;
      const user = await this.authService.login(attr);
      return user
    }
    catch(e){
        console.log(e)
    }    
  }

  @Post('/registration')
  async registration(@Body() attr){
    try{
      const {email, password} = attr;
      const user = await this.authService.registration(attr);
      return user
    }
    catch(e){
      return e
    }
  }

  @Post('/logout')
  async logout(){
    try {
      const cooks = (data) =>{return data.cookie};
      const {refreshToken} = cooks('');
      const token = await this.authService.logout(refreshToken);
      response.clearCookie("refreshToken")
      return response.json(token)
    }
    catch (e){
      return e
    }
    

  }
}
