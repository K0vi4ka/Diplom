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
    return this.userService.getAllUser()
  }

}
