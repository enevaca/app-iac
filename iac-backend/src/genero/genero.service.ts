import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { GeneroEntity } from './entities/genero.entity';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(GeneroEntity)
    private repository: Repository<GeneroEntity>,
  ) {}

  async create(createGeneroDto: CreateGeneroDto): Promise<GeneroEntity> {
    const newGenero = await this.repository.save({
      descripcion: createGeneroDto.descripcion.trim(),
    });
    return newGenero;
  }

  async findAll(): Promise<GeneroEntity[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<GeneroEntity> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El género ${id} no existe`);
    return existe;
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<GeneroEntity> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El género ${id} no existe`);
    const updateGenero = Object.assign(existe, updateGeneroDto);
    return await this.repository.save(updateGenero);
  }

  async remove(id: number): Promise<boolean> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El género ${id} no existe`);
    this.repository.delete(id);
    return true;
  }
}
