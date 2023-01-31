import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NewsCreateDto } from './dto/news-create.dto';
import { News } from './news.model';
import {
  getFile,
  createFile,
  checkIfFileExists,
} from "../file-helper/file-storage";
import { createHash } from 'crypto';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newstRepository: typeof News){}

  async createNews(path: string, fileName: string, data: string){
      var hash = createHash('sha256').update(fileName).digest('hex') 
      path =`${path}/${hash}`
      const file = await this.createNewsFile(path, data);
      console.log(file)
      if(!file){
        throw new HttpException('ФАЙЛ УЖЕ ЕСТЬ, ДИБИЛ',HttpStatus.BAD_REQUEST)
      }
      const dto = new NewsCreateDto(fileName,path);
      const news = await this.newstRepository.create(dto);
      return news;
  }

  async getNewsById(id){
    const news = await this.newstRepository.findOne({where:{id}})
    return news;
  }

   async createNewsFile(path: string, data: string){
    return createFile(path, data);
  }

  async getFile(path: string){
    const fileText = await getFile(path,'utf-8')
    return fileText
  }

  async getFilePathByName(fileName: string) {
    const file = await this.newstRepository.findOne({where:{newsName: fileName}})
    return file
  }

  async getFileContentByPath(filePath: string){
    const content = await this.getFile(filePath+'.html');
    return content
  }

  async getNewsIdByPath(filePath: string) {
    console.log(filePath)
    return await this.newstRepository.findOne({where:{filePath}})
  }

}
