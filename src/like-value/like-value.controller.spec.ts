import { Test, TestingModule } from '@nestjs/testing';
import { LikeValueController } from './like-value.controller';

describe('LikeValueController', () => {
  let controller: LikeValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikeValueController],
    }).compile();

    controller = module.get<LikeValueController>(LikeValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
