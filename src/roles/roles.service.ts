import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRolesDto } from './dto/create-roles.dto';
import { Roles } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles)private rolesRepository: typeof Roles) {}

  async createRoles(dto: CreateRolesDto){
    const role = await this.rolesRepository.create(dto);
    return role;
  }

  async getRollByValue(id: number){
    const role = await this.rolesRepository.findOne({where: {id}})
    return role;
  }

}
