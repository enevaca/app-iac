import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateAlbumDto {
  @ApiProperty()
  @IsNumber()
  idInterprete: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser una cadena' })
  @MaxLength(120, {
    message: 'El campo nombre debe ser menor a 120 caracteres',
  })
  nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fechaLanzamiento no debe ser vacío' })
  @IsString({ message: 'El campo fechaLanzamiento debe ser una cadena' })
  @IsDateString()
  fechaLanzamiento: Date;
}
