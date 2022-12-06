import { Controller, Post, Body, Response} from '@nestjs/common';
import { AuthDto } from 'src/roles/dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { AuthService } from './auth.service'; 

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}

  @Post('/login')
  login(@Body() userdto: AuthDto){
    return this.authService.login(userdto)
  }

  @Post('/registration')
  async registration(@Body() attr){
    const {email, password} = attr;
    const user = await this.authService.registration(attr);
    (data)=>{data.cookie('refreshToken', user.refreshToken,{maxAge:30*24*60*60*1000, httpOnly:true})}
    return user
  }
}
