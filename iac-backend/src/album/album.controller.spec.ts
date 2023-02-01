import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AlbumController } from 'src/album/album.controller';
import { AlbumService } from 'src/album/album.service';
import { repositoryMockFactory } from 'src/mock-factory';
import { AlbumEntity } from './entities/album.entity';

describe('AlbumController', () => {
  let module: TestingModule;
  let controller: AlbumController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AlbumController],
      providers: [AlbumService, { provide: getRepositoryToken(AlbumEntity), useFactory: repositoryMockFactory }],
    }).compile();

    controller = module.get<AlbumController>(AlbumController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
