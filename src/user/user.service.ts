import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import {CreateUserDto} from './dto/createUser.dto'
import { RolesService } from 'src/roles/roles.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcryptjs"

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private userRepository: typeof User,
  private roleService: RolesService, 
  private jwtService: JwtService) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRollByValue(1);
    await user.$set('roles',[role.id])
    user.roles = [role]
    return user;
  }

  async getAllUser(){
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUserByEmail(email){
    const user = await this.userRepository.findOne({where:{email}});
    return user;
  }

  async getUserById(id){
    const user = await this.userRepository.findOne({where:{id}});
    return user;
  }

  async getUserRoles(id){
    const user = await this.userRepository.findOne({where:{id}});
    if (user) {
      return user.$get('roles');
    }
    return [];
  }

  async getExistByUsername(nickname) {
    const user = await this.userRepository.findOne({where: {nickname}});
    return await user
  }

  async getExistByEmail(email) {
    const user = await this.userRepository.findOne({where : {email}})
    return await user;
  }

  async updateUser(id,user) {
    const updatedUser = await this.userRepository.update(
      {FIO: user.FIO ,nickname: user.nickname,email: user.email,phone: user.phone},
      {where: {id:id}}
      ); 
    return await updatedUser
  }

  async chagePassword(id: number,password: string,oldPassword:string) {
    const user = await this.getUserById(id);
    const val = await this.validateUser(id,oldPassword);
      const hashPassword = await bcrypt.hash(password,5);
      const updatedUser = await this.userRepository.update(
        {password: hashPassword},
        {where: {id: id}}
        )
        if(updatedUser) return await updatedUser
        throw new Error("Ошибка, пароли не совпадают")
    }

    private async validateUser(id:number,oldPassword){
      const user = await this.getUserById(id);
      const passwordEquals = await bcrypt.compare(oldPassword, user.password)
      if(user && passwordEquals){
        return user
      }
      throw new UnauthorizedException({message: "Данные введены не верно"})
    }
  
    
}
