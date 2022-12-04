import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRolesDto } from './dto/create-roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService){}

  @Post()
  create(@Body() dto: CreateRolesDto){
    return this.roleService.createRoles(dto);
  }

  @Get(":value")
  getRolesByValue(@Param("value") value: number){
    return this.roleService.getRollByValue(value)
  }

}
