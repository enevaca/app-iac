import { CancionEntity } from 'src/cancion/entities/cancion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('generos')
export class GeneroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  descripcion: string;

  @OneToMany(() => CancionEntity, cancion => cancion.album)
  canciones: CancionEntity[];
}
