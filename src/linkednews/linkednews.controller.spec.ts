import { Test, TestingModule } from '@nestjs/testing';
import { LinkednewsController } from './linkednews.controller';

describe('LinkednewsController', () => {
  let controller: LinkednewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkednewsController],
    }).compile();

    controller = module.get<LinkednewsController>(LinkednewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
