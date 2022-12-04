import { Body,Controller, Post, Get, Param } from '@nestjs/common';
import { IsEmail } from 'sequelize-typescript';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller("users")
export class UserController {

  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.userService.createUser(userDto)
  }

  @Get()
  getAll() {
    console.log("all")
    return this.userService.getAllUser()
  }

  //Предем почту и пароль, если есть возвращает иначе 0
  @Get(":email&:pass")
  getUser(@Param("email") email, @Param("pass") pass) {
    let responce = this.userService.getUser(email,pass)
    if(responce){ return responce}
    return 0;
  }
}
