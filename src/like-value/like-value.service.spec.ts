import { Test, TestingModule } from '@nestjs/testing';
import { LikeValueService } from './like-value.service';

describe('LikeValueService', () => {
  let service: LikeValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikeValueService],
    }).compile();

    service = module.get<LikeValueService>(LikeValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
