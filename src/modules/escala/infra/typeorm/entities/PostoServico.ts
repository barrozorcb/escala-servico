import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import PeriodoServico from './PeriodoServico';

@Entity('T_POSTO_SERVICO')
class PostoServico {
  @PrimaryGeneratedColumn()
  id_posto_servico: number;

  @Column()
  nm_posto_servico: string;

  @Column()
  qtd_pessoa_dia: number;

  @Column()
  st_ativo: boolean;

  @Column()
  id_periodo_servico: number;

  @ManyToOne(() => PeriodoServico)
  @JoinColumn({ name: 'id_periodo_servico' })
  periodoServico: PeriodoServico;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default PostoServico;
