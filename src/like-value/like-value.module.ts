import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Likes } from 'src/likes/likes.model';
import { LikeValue } from './like-value.model';
import { LikeValueController } from './like-value.controller';
import { LikeValueService } from './like-value.service';

@Module({
  controllers: [LikeValueController],
  providers: [LikeValueService],
  imports: [
    SequelizeModule.forFeature([LikeValue,Likes]),
    LikeValueModule
  ],
  exports :[
    LikeValueService,
  ]
  
})
export class LikeValueModule {}
