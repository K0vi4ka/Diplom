import { Controller,Post,Get,Body,Param,Redirect } from '@nestjs/common';
import { UnconfirmUserService } from './unconfirm_user.service';
import { UnconfirmCreateDto } from './.dto/unconfirm-user-create.dto';

@Controller('unconfirm-user')
export class UnconfirmUserController {
  constructor(private unconfirmUserService: UnconfirmUserService){}

  @Post("/create")
  async createUser(@Body() dto: UnconfirmCreateDto) {
    const user = await this.unconfirmUserService.createUnconfirmUser(dto);
    return await user
  }

  @Get("confirm-email/:token")
  @Redirect('http://localhost:8080/newsTime')
  async confirmUser(@Param("token") token: string) {
    const user = await this.unconfirmUserService.confirmUser(token);
    return await user
  }

  @Get("isUserConfirm/:id")
  async isUserConfirm(@Param("id") id: number){
    const user = await this.unconfirmUserService.isUserConfirm(id);
    console.log(await user)
    if(await user) return false
    return true
  }
}
