import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('T_PERIODO_SERVICO')
class PeriodoServico {
  @PrimaryGeneratedColumn()
  id_periodo_servico: number;

  @Column()
  tp_periodo_servico: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default PeriodoServico;
