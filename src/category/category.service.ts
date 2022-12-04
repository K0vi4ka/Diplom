import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category-model';
import { CreateCategoryDto } from './dto/category-create.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category)private categoryRepository: typeof Category){}

  async createCategory(dto: CreateCategoryDto){
    const category =  await this.categoryRepository.create(dto)
    return category

  }

  async getCategoryById(id){
    const category = await this.categoryRepository.findOne({where:{id}})
    return category

  }

  async getAllCaterory(){
    const categorys = await this.categoryRepository.findAll();
    return categorys
  }
}
