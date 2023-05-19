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

  @Post('update/:id') 
  async updateUsersData(@Param('id') id:number,@Body() userDto: CreateUserDto) {
     try{
      await this.userService.updateUser(id,userDto);
      return true;
     }
     catch {
      return false;
     }
  }

  @Post('update/data/password')
  async updateUserPassword(@Body() passwords) {
    const userId = passwords.userId;
    const newPassword = passwords.newPassword;
    const oldPassword = passwords.oldPassword;
    try{
      await this.userService.chagePassword(userId,newPassword,oldPassword);
      return true
    }
    catch{
      return false
    }
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
