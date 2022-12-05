import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { HttpStatusCode } from 'axios';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcryptjs"
import { AuthDto } from 'src/roles/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
    private jwtService: JwtService){}

  async login(userdto: AuthDto){
    const user = await this.validateUser(userdto)
    console.log(user)
    return this.generateToken(user)
  }

  async registration(userdto: CreateUserDto){
    const reg = await this.userService.getUserByEmail(userdto.email)
    if(reg){
      throw new HttpException("Пользователь уже есть",HttpStatusCode.BadRequest);
    }

    const hashPassword = await bcrypt.hash(userdto.password,5);
    const user = await this.userService.createUser({...userdto,password: hashPassword})
    return this.generateToken(user)
  }

  private async generateToken(user: User){
    const payload = {email: user.email, id: user.id, roles: user.roles, nickname: user.nickname}

    return{
      token: this.jwtService.sign(payload)
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
