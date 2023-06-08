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
        user: "newstime@internet.ru", // generated ethereal user
        pass: "gKMy1VuBJk4XVhvkw1fM", // generated ethereal password
      },
      
    });
    console.log("WORK")

    await transporter.sendMail(
    {
      from: '"Иван Замиралов" newstime@internet.ru',
        to: await user.email,
        subject: 'Подтверждение электронной почты',
        text: `Для подтверждения электронной почты перейдите по ссылке: ${process.env.APP_URL}/unconfirm-user/confirm-email/${await tokens.accessToken}`,
        html: `<div style="width: 500px;min-height: 400px; margin: 0 auto; border: 1px solid black; border-radius: 10px;padding:30px">
        <p style="text-decoration:underline;
          font-size: 38px; text-align: center">NewsTime
        </p>
        <p style="font-size: 20px">Уважаемый пользователь, с вашей электронной почты поступил запрос на регистрации на нашем сайте. Для подтверждения нажмите на следующую кнопку:</p>
        <a href="${process.env.APP_URL}/unconfirm-user/confirm-email/${await tokens.accessToken}" style="border-radius: 10px;border: 1px solid black; padding:10px;font-size: 20px; text-decoration: none; margin-left:33%;width: 200px">
          Подтверждение
        </a>
      </div>`
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
