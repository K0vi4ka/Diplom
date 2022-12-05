import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { News } from './news.model';
import { Publication } from 'src/publication/publication.model';

@Module({
  providers: [NewsService],
  controllers: [NewsController],

  imports: [
    SequelizeModule.forFeature([News,Publication])
  ]
  
})
export class NewsModule {}
