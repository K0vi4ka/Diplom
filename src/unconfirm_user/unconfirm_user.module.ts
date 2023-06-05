import { Module } from '@nestjs/common';
import { UnconfirmUserService } from './unconfirm_user.service';
import { UnconfirmUserController } from './unconfirm_user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UnconfirmUser } from './unconfirm_user_model';

@Module({
  providers: [UnconfirmUserService],
  controllers: [UnconfirmUserController],
  imports: [
    SequelizeModule.forFeature([UnconfirmUser]),
  ],
  exports: [
    UnconfirmUserService
  ]
})
export class UnconfirmUserModule {}
