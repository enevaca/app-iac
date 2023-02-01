import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateCancionDto {
  @ApiProperty()
  @IsNumber({}, { message: 'El idAlmbum debe ser un número' })
  idAlbum: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El idAlmbum debe ser un número' })
  idGenero: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre de la canción no debe ser vacío' })
  @IsString({ message: 'El campo nombre de la canción  debe ser una cadena' })
  @MaxLength(100, {
    message: 'El campo nombre de la canción debe ser menor a 100 caracteres',
  })
  nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo duracion de la canción no debe ser vacío' })
  @MaxLength(8, {
    message: 'El campo duracion de la canción debe ser menor a 8 caracteres',
  })
  duracion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tags no debe ser vacío' })
  @IsString({ message: 'El campo tags debe ser una cadena' })
  @MaxLength(80, { message: 'El campo tags debe ser menor a 80 caracteres' })
  tags: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo url no debe ser vacío' })
  @IsUrl({}, { message: 'Forma de url no válido' })
  @MaxLength(500, { message: 'El campo tags debe ser menor a 500 caracteres' })
  url: string;
}
