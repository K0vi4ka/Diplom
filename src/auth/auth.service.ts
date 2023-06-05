import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcryptjs"
import { AuthDto } from 'src/roles/dto/auth.dto';
import { TokenService } from 'src/token/token.service';
import { JwtDto } from './dto/create-jwt.dto';
import { ApiError } from 'src/exceptions/api-error';
import { RolesService } from 'src/roles/roles.service';
import { UnconfirmUserService } from 'src/unconfirm_user/unconfirm_user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
    private jwtService: JwtService,
    private tokenService: TokenService,
    private roleService: RolesService,
    private unconfirmServece: UnconfirmUserService){}

  async login(userdto: AuthDto){
    const user = await this.validateUser(userdto)
    if(!user){
      throw new UnauthorizedException({message: "Данные введены не верно"})
    }
    
    const userDto = new JwtDto(user.id, user.email);
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
    const role = await this.roleService.getRollByValue(1);
    await user.$set('roles',[role.id])
    user.roles = [role];

    const unconfirmDto = {
      "userId": await user.id,
      "token": await tokens.accessToken
    }

    const nodemailer = require("nodemailer");
    await this.unconfirmServece.createUnconfirmUser(await unconfirmDto);
    console.log("SOME")


    let transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "ubeimen9@mail.ru", // generated ethereal user
        pass: "g6aELDdSB4sziEx6ZK3m", // generated ethereal password
      },
      
    });
    console.log("WORK")

    await transporter.sendMail(
    {
      from: '"Иван Замиралов" ubeimen9@mail.ru',
        to: await user.email,
        subject: 'Подтверждение электронной почты',
        text: `Для подтверждения электронной почты перейдите по ссылке: ${process.env.APP_URL}/unconfirm-user/confirm-email/${await tokens.accessToken}`,
        html: `<p>Для подтверждения электронной почты перейдите</p><a href="${process.env.APP_URL}/unconfirm-user/confirm-email/${await tokens.accessToken}"> по ссылке </a>`
    });
    console.log("WORK")

    return {
      ...tokens,
      user: await userDto
    }
  }

  async logout(refreshToken){
    const tokenData = await this.tokenService.deleteOne(refreshToken);
    return tokenData
  }

  async validateUser(userdto: AuthDto){
    const user = await this.userService.getUserByEmail(userdto.email)
    const passwordEquals = await bcrypt.compare(userdto.password, user.password)
    if(user && passwordEquals){
      return user
    }
    throw new UnauthorizedException({message: "Данные введены не верно"})
  }

}
