import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Publication } from 'src/publication/publication.model';
import { Roles } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/user-roles.model';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],

  imports: [
    SequelizeModule.forFeature([User,Roles,UserRoles,Publication]),
    RolesModule,   
    forwardRef(() => AuthModule)
  ],
  exports:[
    UserService,
  ]
})
export class UserModule {}
