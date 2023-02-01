import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateGeneroDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo genero no debe ser vacío' })
  @IsString({ message: 'El campo genero debe ser una cadena' })
  @MaxLength(100, {
    message: 'El campo genero debe ser menor a 100 caracteres',
  })
  descripcion: string;
}
