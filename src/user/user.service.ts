import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import {CreateUserDto} from './dto/createUser.dto'
import { RolesService } from 'src/roles/roles.service';
import { where } from 'sequelize';

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private userRepository: typeof User,
  private roleService: RolesService) {}

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
    return user.$get('roles');
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
    const updatedUser = await this.userRepository.update(id,user); 
    return await updatedUser
  }
}
