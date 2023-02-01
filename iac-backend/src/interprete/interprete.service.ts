import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInterpreteDto } from './dto/create-interprete.dto';
import { UpdateInterpreteDto } from './dto/update-interprete.dto';
import { InterpreteEntity } from './entities/interprete.entity';

@Injectable()
export class InterpreteService {
  constructor(
    @InjectRepository(InterpreteEntity)
    private repository: Repository<InterpreteEntity>,
  ) {}

  async create(createInterpreteDto: CreateInterpreteDto): Promise<InterpreteEntity> {
    const newInterprete = await this.repository.save({
      nombre: createInterpreteDto.nombre,
      nacionalidad: createInterpreteDto.nacionalidad,
    });
    return newInterprete;
  }

  async findAll(): Promise<InterpreteEntity[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<InterpreteEntity> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El interprete ${id} no existe.`);
    return existe;
  }

  async update(id: number, updateInterpreteDto: UpdateInterpreteDto): Promise<InterpreteEntity> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El interprete ${id} no existe.`);

    const updateInterprete = Object.assign(existe, updateInterpreteDto);
    return await this.repository.save(updateInterprete);
  }

  async remove(id: number): Promise<boolean> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El interprete ${id} no existe.`);

    await this.repository.delete(id);
    return true;
  }
}
