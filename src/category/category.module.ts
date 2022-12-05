import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publication } from 'src/publication/publication.model';
import { Category } from './category-model';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],

  imports: [
    SequelizeModule.forFeature([Category,Publication])
  ],
  exports:[
    CategoryService
  ]
})
export class CategoryModule {}
