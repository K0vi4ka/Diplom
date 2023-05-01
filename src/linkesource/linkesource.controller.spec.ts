import { Test, TestingModule } from '@nestjs/testing';
import { LinkesourceController } from './linkesource.controller';

describe('LinkesourceController', () => {
  let controller: LinkesourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkesourceController],
    }).compile();

    controller = module.get<LinkesourceController>(LinkesourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
