import { Module } from '@nestjs/common';
import { LinkesourceService } from './linkesource.service';
import { LinkesourceController } from './linkesource.controller';
import { LinkeSource } from './linkesource-model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [LinkesourceService],
  controllers: [LinkesourceController],
  imports: [
    SequelizeModule.forFeature([LinkeSource]),
  ]
})
export class LinkesourceModule {}
