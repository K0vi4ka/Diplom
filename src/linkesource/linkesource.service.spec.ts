import { Test, TestingModule } from '@nestjs/testing';
import { LinkesourceService } from './linkesource.service';

describe('LinkesourceService', () => {
  let service: LinkesourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkesourceService],
    }).compile();

    service = module.get<LinkesourceService>(LinkesourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
