import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
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

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
    private jwtService: JwtService,
    private tokenService: TokenService){}

  async login(userdto: AuthDto){
    const user = await this.validateUser(userdto)
    console.log(user)
    return this.tokenService.generateToken(user)
  }

  async registration(userdto: CreateUserDto){
    const reg = await this.userService.getUserByEmail(userdto.email)
    if(reg){
      throw new HttpException("Пользователь уже есть",HttpStatusCode.BadRequest);
    }

    const hashPassword = await bcrypt.hash(userdto.password,5);
    const user = await this.userService.createUser({...userdto,password: hashPassword})
    const userDto = new JwtDto(user.id, user.email)
    const tokens = await this.tokenService.generateToken(user)
    console.log(tokens+"THIS TOKEN")
    console.log(user)
    await this.tokenService.saveToken(user.id, (await tokens).refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  private async validateUser(userdto: AuthDto){
    const user = await this.userService.getUserByEmail(userdto.email)
    const passwordEquals = await bcrypt.compare(userdto.password, user.password)
    if(user && passwordEquals){
      return user
    }
    
    console.log(passwordEquals)
    throw new UnauthorizedException({message: "Данные введены не верно"})
  }

}
