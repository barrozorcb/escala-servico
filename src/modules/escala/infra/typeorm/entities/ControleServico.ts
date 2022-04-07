import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import PostoServico from './PostoServico';
import TipoEscala from './TipoEscala';

@Entity('T_POSTO_SERVICO')
class ControleServico {
  @PrimaryGeneratedColumn()
  id_controle_servico: number;

  @Column()
  nr_ordem: number;

  @Column()
  dt_servico: Date;

  @Column()
  id_posto_servico: number;

  @ManyToOne(() => PostoServico)
  @JoinColumn({ name: 'id_posto_servico' })
  postoServico: PostoServico;

  @Column()
  id_tipo_escala: number;

  @ManyToOne(() => TipoEscala)
  @JoinColumn({ name: 'id_tipo_escala' })
  tipoEscala: TipoEscala;

}

export default ControleServico;
