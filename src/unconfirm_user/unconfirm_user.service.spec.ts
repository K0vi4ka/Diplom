import { Test, TestingModule } from '@nestjs/testing';
import { UnconfirmUserService } from './unconfirm_user.service';

describe('UnconfirmUserService', () => {
  let service: UnconfirmUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnconfirmUserService],
    }).compile();

    service = module.get<UnconfirmUserService>(UnconfirmUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
