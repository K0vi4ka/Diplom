import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import {CreateUserDto} from './dto/createUser.dto'
import { RolesService } from 'src/roles/roles.service';

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
}
