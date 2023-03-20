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

  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUserById(@Param('id') id:number){
    return this.userService.getUserById(id)
  }

  @Post('update:id') 
  updateUsers(@Param('id') id:number,@Body() userDto: CreateUserDto) {
    this.userService.updateUser(id,userDto);
  }

  @Get('roles/:id')
  async getUserRolesById(@Param('id') id:number){
    const roles = await this.userService.getUserRoles(id);
    return roles[0].description;
  }

  @Get('exist/nickname/:nickname')
  async userExist(@Param('nickname') nickname: string) {
    const user = await this.userService.getExistByUsername(nickname)
    if(user) {
      //User exist -> can't create user
      return false
    }
    return true;
  }

  @Get('exist/email/:email')
  async emailExist(@Param('email') nickname: string) {
    const user = await this.userService.getExistByEmail(nickname)
    if(user) {
      //User exist -> can't create user
      return false
    }
    return true;
  }
}
