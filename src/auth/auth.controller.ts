import { Controller, Post, Body} from '@nestjs/common';
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
  registration(@Body() userdto: CreateUserDto){
    return this.authService.registration(userdto)
  }
}
