import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateLikeValueDto } from './.dto/create-likeValue.dto';
import { LikeValueService } from './like-value.service';


@Controller('like-value')
export class LikeValueController {
  constructor(private likeValueService: LikeValueService){}

  @Post('/create')
  async createLikeValue(@Body() dto:CreateLikeValueDto) {
    const likeValue = await this.likeValueService.createLikeValue(dto);
    return likeValue;
  }
}
