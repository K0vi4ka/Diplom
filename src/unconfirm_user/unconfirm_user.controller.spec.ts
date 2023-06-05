import { Test, TestingModule } from '@nestjs/testing';
import { UnconfirmUserController } from './unconfirm_user.controller';

describe('UnconfirmUserController', () => {
  let controller: UnconfirmUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnconfirmUserController],
    }).compile();

    controller = module.get<UnconfirmUserController>(UnconfirmUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
