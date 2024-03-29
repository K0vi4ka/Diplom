import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import {JwtModule} from "@nestjs/jwt"
import { TokenModule } from 'src/token/token.module';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from 'src/token/token.model';
import { RolesModule } from 'src/roles/roles.module';
import { UnconfirmUserModule } from 'src/unconfirm_user/unconfirm_user.module';
import { UnconfirmUser } from 'src/unconfirm_user/unconfirm_user_model';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    SequelizeModule.forFeature([Token,UnconfirmUser]),
    forwardRef(()=>UserModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "SECRET",
      signOptions: {
        expiresIn: '24h'
      }
    }),
    TokenModule,
    RolesModule,
    UnconfirmUserModule
   
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
