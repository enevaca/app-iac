import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from 'src/mock-factory';
import { Repository } from 'typeorm';
import { GeneroEntity } from './entities/genero.entity';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';

const id = 1;
const descripcion = 'Rock';

const genero = { id, descripcion };
const genero2 = { id: 2, descripcion: 'Pop' };
const generos = [genero, genero2];

describe('GeneroService', () => {
  let service: GeneroService;
  let repositoryMock: MockType<Repository<GeneroEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneroController],
      providers: [
        GeneroService,
        {
          provide: getRepositoryToken(GeneroEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<GeneroService>(GeneroService);
    repositoryMock = module.get(getRepositoryToken(GeneroEntity));
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debe insertar con éxito un nuevo Genero', () => {
    repositoryMock.save.mockReturnValue(genero);
    const createDto = { descripcion };
    expect(service.create(createDto)).resolves.toEqual(genero);
    expect(repositoryMock.save).toBeCalledTimes(1);
    expect(repositoryMock.save).toBeCalledWith({ descripcion });
    expect(repositoryMock.save).toBeCalledTimes(1);
  });

  it('debe obtener una lista de Generos', async () => {
    repositoryMock.find.mockReturnValue(generos);
    expect(service.findAll()).resolves.toEqual(generos);
    expect(repositoryMock.find).toHaveBeenCalled();
  });

  it('debe devolver un Genero en base a un id', async () => {
    repositoryMock.findOne.mockReturnValue(genero);
    expect(service.findOne(genero.id)).resolves.toEqual(genero);
    expect(repositoryMock.findOne).toHaveBeenCalled();
  });

  it('debe modificar con éxito un Genero', async () => {
    const updateGeneroDto = { descripcion: 'U-' + descripcion };
    const expectedResult = { id, ...updateGeneroDto };

    repositoryMock.findOne.mockReturnValue(genero);
    repositoryMock.save.mockReturnValue(expectedResult);

    const generoUpdated = await service.update(id, updateGeneroDto);
    expect(generoUpdated).toEqual(expectedResult);
    expect(repositoryMock.save).toBeCalledTimes(1);
  });

  it('debe eliminar con éxito un Genero', async () => {
    repositoryMock.findOne.mockReturnValue(genero);
    repositoryMock.delete.mockReturnValue(true);
    expect(service.remove(id)).resolves.toEqual(true);
  });
});
