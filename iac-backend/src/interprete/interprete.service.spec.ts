import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from 'src/mock-factory';
import { Repository } from 'typeorm';
import { InterpreteEntity } from './entities/interprete.entity';
import { InterpreteController } from './interprete.controller';
import { InterpreteService } from './interprete.service';

const id = 1;
const nombre = 'Queen';
const nacionalidad = 'Reino Unido';

const interprete = { id, nombre, nacionalidad };
const interprete2 = { id: 2, nombre: 'Led Zeppelin', nacionalidad: 'Estados Unidos' };
const interpretes = [interprete, interprete2];

describe('InterpreteService', () => {
  let service: InterpreteService;
  let repositoryMock: MockType<Repository<InterpreteEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterpreteController],
      providers: [
        InterpreteService,
        {
          provide: getRepositoryToken(InterpreteEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<InterpreteService>(InterpreteService);
    repositoryMock = module.get(getRepositoryToken(InterpreteEntity));
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debe insertar con éxito un nuevo Interprete', () => {
    repositoryMock.save.mockReturnValue(interprete);
    const createDto = { nombre, nacionalidad };
    expect(service.create(createDto)).resolves.toEqual(interprete);
    expect(repositoryMock.save).toBeCalledTimes(1);
    expect(repositoryMock.save).toBeCalledWith({ nombre, nacionalidad });
    expect(repositoryMock.save).toBeCalledTimes(1);
  });

  it('debe obtener una lista de Interpretes', async () => {
    repositoryMock.find.mockReturnValue(interpretes);
    expect(service.findAll()).resolves.toEqual(interpretes);
    expect(repositoryMock.find).toHaveBeenCalled();
  });

  it('debe devolver un Interprete en base a un id', async () => {
    repositoryMock.findOne.mockReturnValue(interprete);
    expect(service.findOne(interprete.id)).resolves.toEqual(interprete);
    expect(repositoryMock.findOne).toHaveBeenCalled();
  });

  it('debe modificar con éxito un Interprete', async () => {
    const updateInterpreteDto = { nombre: 'U-' + nombre, nacionalidad: 'U' + nacionalidad };
    const expectedResult = { id, ...updateInterpreteDto };

    repositoryMock.findOne.mockReturnValue(interprete);
    repositoryMock.save.mockReturnValue(expectedResult);

    const interpreteUpdated = await service.update(id, updateInterpreteDto);
    expect(interpreteUpdated).toEqual(expectedResult);
    expect(repositoryMock.save).toBeCalledTimes(1);
  });

  it('debe eliminar con éxito un Interprete', async () => {
    repositoryMock.findOne.mockReturnValue(interprete);
    repositoryMock.delete.mockReturnValue(true);
    expect(service.remove(id)).resolves.toEqual(true);
  });
});
