import { Body,Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { IsEmail } from 'sequelize-typescript';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller("users")
export class UserController {

  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.userService.createUser(userDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUser()
  }

}
