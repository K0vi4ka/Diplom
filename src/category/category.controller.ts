import { Controller,Get,Post,Param, Body, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category-create.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService){}

  @Get("/:id")
  getCategoryById(@Param("id") id){
    return this.categoryService.getCategoryById(id)
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
