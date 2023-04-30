import { Controller,Get,Param } from '@nestjs/common';
import { LinkesourceService } from './linkesource.service';

@Controller('linkesource')
export class LinkesourceController {
  constructor(private linkeSourceService: LinkesourceService){}

  @Get(":value")
  async createLinkeSource(@Param("value") value: string) {
    try {
      const source = await this.linkeSourceService.createLinkeSource(value);
      return await source.id;
    }catch(ApiError) {
      throw new ApiError.BadRequst("Ошибка, пользователь уже создан");
    }
  }

}
