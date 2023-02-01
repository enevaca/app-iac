import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumEntity } from './entities/album.entity';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private repository: Repository<AlbumEntity>,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<AlbumEntity> {
    const newAlbum = await this.repository.save({
      idInterprete: createAlbumDto.idInterprete,
      nombre: createAlbumDto.nombre.trim(),
      fechaLanzamiento: createAlbumDto.fechaLanzamiento,
    });
    return newAlbum;
  }

  async findAll(): Promise<AlbumEntity[]> {
    return await this.repository.find({ relations: { interprete: true } });
  }

  async findOne(id: number): Promise<AlbumEntity> {
    const existe = await this.repository.findOne({
      where: { id },
      relations: { interprete: true },
    });
    if (!existe) throw new NotFoundException(`El album ${id} no existe`);
    return existe;
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<AlbumEntity> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El album ${id} no existe`);
    const updateAlbum = Object.assign(existe, updateAlbumDto);
    return await this.repository.save(updateAlbum);
  }

  async remove(id: number): Promise<boolean> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`El album ${id} no existe`);
    this.repository.delete(id);
    return true;
  }
}
