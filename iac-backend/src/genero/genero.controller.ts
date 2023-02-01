import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { GeneroEntity } from './entities/genero.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('generos')
@Controller('generos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto): Promise<GeneroEntity> {
    return this.generoService.create(createGeneroDto);
  }

  @Get()
  findAll(): Promise<GeneroEntity[]> {
    return this.generoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GeneroEntity> {
    return this.generoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto): Promise<GeneroEntity> {
    return this.generoService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.generoService.remove(+id);
  }
}
