import { Controller,Get,Post,Param, Body, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category-create.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService){}

  @Get("/:value")
  getCategoryById(@Param("value") value){
    return this.categoryService.getCategoryByValue(value)
  }

  @Post()
  createCategory(@Body() dto: CreateCategoryDto){
    return this.categoryService.createCategory(dto)
  }

  @Get()
  getAllCategory(){
    return this.categoryService.getAllCaterory();
  }

  
}
