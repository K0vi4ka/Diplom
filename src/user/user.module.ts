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
import { Token } from 'src/token/token.model';
import { UnconfirmUser } from 'src/unconfirm_user/unconfirm_user_model';
import { TokenModule } from 'src/token/token.module';
import { UnconfirmUserModule } from 'src/unconfirm_user/unconfirm_user.module';

@Module({
  controllers: [UserController],
  providers: [UserService],

  imports: [
    SequelizeModule.forFeature([User,Roles,UserRoles,Publication,Token,UnconfirmUser]),
    RolesModule,
    TokenModule,
    UnconfirmUserModule,
    forwardRef(() => AuthModule)
  ],
  exports:[
    UserService,
  ]
})
export class UserModule {}
