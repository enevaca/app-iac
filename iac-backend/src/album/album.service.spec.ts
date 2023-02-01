import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from 'src/mock-factory';
import { Repository } from 'typeorm';
import { AlbumEntity } from './entities/album.entity';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';

const id = 1;
const idInterprete = 1;
const nombre = 'album1';
const fechaLanzamiento = new Date('1999-05-10');

const album = { id, idInterprete, nombre, fechaLanzamiento };
const album2 = {
  id: 2,
  idInterprete: 1,
  nombre: 'album2',
  fechaLanzamiento: Date.parse('1999-05-10'),
};
const albumes = [album, album2];

describe('AlbumService', () => {
  let service: AlbumService;
  let repositoryMock: MockType<Repository<AlbumEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumController],
      providers: [
        AlbumService,
        {
          provide: getRepositoryToken(AlbumEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<AlbumService>(AlbumService);
    repositoryMock = module.get(getRepositoryToken(AlbumEntity));
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debe insertar con éxito un nuevo Album', () => {
    repositoryMock.save.mockReturnValue(album);
    const createDto = { idInterprete, nombre, fechaLanzamiento };
    expect(service.create(createDto)).resolves.toEqual(album);
    expect(repositoryMock.save).toBeCalledTimes(1);
    expect(repositoryMock.save).toBeCalledWith({
      idInterprete,
      nombre,
      fechaLanzamiento,
    });
    expect(repositoryMock.save).toBeCalledTimes(1);
  });

  it('debe obtener una lista de Albumes', async () => {
    repositoryMock.find.mockReturnValue(albumes);
    expect(service.findAll()).resolves.toEqual(albumes);
    expect(repositoryMock.find).toHaveBeenCalled();
  });

  it('debe devolver un Album en base a un id', async () => {
    repositoryMock.findOne.mockReturnValue(album);
    expect(service.findOne(album.id)).resolves.toEqual(album);
    expect(repositoryMock.findOne).toHaveBeenCalled();
  });

  it('debe modificar con éxito un Album', async () => {
    const updateAlbumDto = {
      nombre: 'U-' + nombre,
      fechaLanzamiento: new Date('1999-05-11'),
    };
    const expectedResult = { id, ...updateAlbumDto };

    repositoryMock.findOne.mockReturnValue(album);
    repositoryMock.save.mockReturnValue(expectedResult);

    const interpreteUpdated = await service.update(id, updateAlbumDto);
    expect(interpreteUpdated).toEqual(expectedResult);
    expect(repositoryMock.save).toBeCalledTimes(1);
  });

  it('debe eliminar con éxito un Album', async () => {
    repositoryMock.findOne.mockReturnValue(album);
    repositoryMock.delete.mockReturnValue(true);
    expect(service.remove(id)).resolves.toEqual(true);
  });
});
