import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default PostoServico;
