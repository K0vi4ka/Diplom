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

  @Get('categoryname/full')
  async getAllCategoryFullData() {
    const categoryes = await this.categoryService.getAllCaterory();
    return await categoryes
  }

  @Get()
  async getAllCategory(){
    const categoryes = await this.categoryService.getAllCaterory();
    const response = [];
    [...categoryes].forEach(item =>{response.push(item.value)})

    return response
  }

  @Get("categoryId/:category")
  async getCategoryName(@Param("category") categoryId:number) {
    const categoryName = await this.categoryService.getCategoryName(categoryId);
    return await categoryName.value
  }

  
}
