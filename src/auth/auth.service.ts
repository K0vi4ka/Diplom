import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { HttpStatusCode } from 'axios';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcryptjs"
import { AuthDto } from 'src/roles/dto/auth.dto';
import { TokenService } from 'src/token/token.service';
import { JwtDto } from './dto/create-jwt.dto';
import { ApiError } from 'src/exceptions/api-error';
import { RolesService } from 'src/roles/roles.service';
import { response } from 'express';
import { request } from 'express';

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
    private jwtService: JwtService,
    private tokenService: TokenService,
    private roleService: RolesService){}

  async login(userdto: AuthDto){
    const user = await this.validateUser(userdto)
    if(!user){
      throw new UnauthorizedException({message: "Данные введены не верно"})
    }
    
    const userDto = new JwtDto(user.id, user.email)
      const tokens = await this.tokenService.generateToken(user)
      await this.tokenService.saveToken(user.id, (await tokens).refreshToken)
  
      return {
        ...tokens,
        user: userDto
      } 

  }

  async registration(userdto: CreateUserDto){
    const reg = await this.userService.getUserByEmail(userdto.email)
    if(reg){
      throw ApiError.BadRequst("Пользователь уже есть");
    }

    const hashPassword = await bcrypt.hash(userdto.password,5);
    const user = await this.userService.createUser({...userdto,password: hashPassword})
    const userDto = new JwtDto(user.id, user.email)
    const tokens = await this.tokenService.generateToken(user)
    await this.tokenService.saveToken(user.id, (await tokens).refreshToken)
    const role = await this.roleService.getRollByValue(2);
    await user.$set('roles',[role.id])
    user.roles = [role]

    return {
      ...tokens,
      user: userDto
    }
  }

  async logout(refreshToken){
    const tokenData = await this.tokenService.deleteOne(refreshToken);
    return tokenData
  }

  private async validateUser(userdto: AuthDto){
    const user = await this.userService.getUserByEmail(userdto.email)
    const passwordEquals = await bcrypt.compare(userdto.password, user.password)
    if(user && passwordEquals){
      return user
    }
    throw new UnauthorizedException({message: "Данные введены не верно"})
  }

}
