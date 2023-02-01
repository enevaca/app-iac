import { CancionEntity } from 'src/cancion/entities/cancion.entity';
import { InterpreteEntity } from 'src/interprete/entities/interprete.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('albums')
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_interprete', type: 'int' })
  idInterprete: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ name: 'fecha_lanzamiento', type: 'date' })
  fechaLanzamiento: Date;

  @ManyToOne(() => InterpreteEntity, interprete => interprete.albums)
  @JoinColumn({ name: 'id_interprete' })
  interprete: InterpreteEntity;

  @OneToMany(() => CancionEntity, cancion => cancion.album)
  canciones: CancionEntity[];
}
