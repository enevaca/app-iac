import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('usuarios')
export class UsuarioEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 10 }) usuario: string;
  @Column({ length: 150, select: false }) clave: string;
  @Column({ length: 60 }) email: string;
  @Column({ length: 20 }) rol: string;
  @Column({ default: false }) premium: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    if (this.clave && !/^\$2a\$\d+\$/.test(this.clave)) {
      this.clave = await bcrypt.hash(this.clave, salt);
    }
  }

  validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.clave);
  }
}
