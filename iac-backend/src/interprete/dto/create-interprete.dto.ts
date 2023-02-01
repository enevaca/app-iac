import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateInterpreteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser una cadena' })
  @MaxLength(100, {
    message: 'El campo nombre debe ser menor a 100 caracteres',
  })
  nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nacionaldiad no debe ser vacío' })
  @IsString({ message: 'El campo nacionalidad debe ser una cadena' })
  @MaxLength(50, {
    message: 'El campo nacionalidad debe ser menor a 50 caracteres',
  })
  nacionalidad: string;
}
