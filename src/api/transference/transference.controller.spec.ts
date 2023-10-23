import { Test, TestingModule } from '@nestjs/testing';
import { TransferenceController } from './transference.controller';

describe('TransferenceController', () => {
  let controller: TransferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferenceController],
    }).compile();

    controller = module.get<TransferenceController>(TransferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
