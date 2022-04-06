import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('T_TIPO_ESCALA')
class TipoEscala {
  @PrimaryGeneratedColumn()
  id_tipo_escala: number;

  @Column()
  tp_escala: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default TipoEscala;
