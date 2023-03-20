import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { Token } from './token.model';

@Module({
  providers: [TokenService],
  controllers: [TokenController],
  imports:[
    SequelizeModule.forFeature([Token,User]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "SECRET",
      signOptions: {
        expiresIn: '24h'
      }
    }),
  ], 
  exports: [
    TokenService
  ]
})
export class TokenModule {}
