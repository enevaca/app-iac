import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'src/mock-factory';
import { GeneroEntity } from './entities/genero.entity';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';

describe('GeneroController', () => {
  let controller: GeneroController;
  //let repositoryMock: MockType<Repository<GeneroEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneroController],
      providers: [GeneroService, { provide: getRepositoryToken(GeneroEntity), useFactory: repositoryMockFactory }],
    }).compile();

    controller = module.get<GeneroController>(GeneroController);
    //repositoryMock = module.get(getRepositoryToken(GeneroEntity));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
