import { Test, TestingModule } from '@nestjs/testing';
import { LinkednewsService } from './linkednews.service';

describe('LinkednewsService', () => {
  let service: LinkednewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkednewsService],
    }).compile();

    service = module.get<LinkednewsService>(LinkednewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
