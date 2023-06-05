import { Controller,Get,Param } from '@nestjs/common';
import { LinkesourceService } from './linkesource.service';

@Controller('linkesource')
export class LinkesourceController {
  constructor(private linkeSourceService: LinkesourceService){}

  @Get(":value")
  async createLinkeSource(@Param("value") value: string) {
      const source = await this.linkeSourceService.getLinkedSourceByValue(value);
      return await source;
  }

}
