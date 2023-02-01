import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'src/mock-factory';
import { InterpreteEntity } from './entities/interprete.entity';
import { InterpreteController } from './interprete.controller';
import { InterpreteService } from './interprete.service';

describe('InterpreteController', () => {
  let module: TestingModule;
  let controller: InterpreteController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [InterpreteController],
      providers: [
        InterpreteService,
        { provide: getRepositoryToken(InterpreteEntity), useFactory: repositoryMockFactory },
      ],
    }).compile();

    controller = module.get<InterpreteController>(InterpreteController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
