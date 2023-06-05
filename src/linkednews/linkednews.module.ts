import { Module } from '@nestjs/common';
import { LinkednewsService } from './linkednews.service';
import { LinkednewsController } from './linkednews.controller';
import { LinkdedNews } from './linkednews.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [LinkednewsService],
  controllers: [LinkednewsController],

  imports: [
    SequelizeModule.forFeature([LinkdedNews]),
    HttpModule,
  ]
})
export class LinkednewsModule {}
