import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LinkeSource } from './linkesource-model';
import { CreateLinkeSource } from './dto/linkesource-create.dto';

@Injectable()
export class LinkesourceService {
  constructor(@InjectModel(LinkeSource) private linkeSourceService: typeof LinkeSource){}

  async createLinkeSource(value) {
    try{
      var obj:CreateLinkeSource = {source:value};
      const source = await this.linkeSourceService.create(obj);
      return source;
    }
    catch {
      throw new Error("пользователь уже создан")
    }

  }

  async getLinkeSourceById(id: number) {
    const source = await this.linkeSourceService.findOne({where: {
      id: id
    }})

    return source;
  }

  async getLinkedSourceByValue(value: string) {
    const source = await this.linkeSourceService.findOrCreate({
      where:{source: value},
    })
    return await source;
  }
}

