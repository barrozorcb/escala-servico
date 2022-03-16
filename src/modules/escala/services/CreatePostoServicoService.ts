import { injectable, inject } from 'tsyringe';

import IPostoServicosRepository from '../repositories/IPostoServicosRepository';
import PostoServico from '@modules/escala/infra/typeorm/entities/PostoServico';
// import AppError from '@shared/errors/AppError';

interface IRequest {
  nmPostoServico: string;
  qtdPessoaDia: number;
  stAtivo: boolean;
}

@injectable()
class CreatePostoServicoService {
  constructor(
    @inject('PostoServicosRepository')
    private postoServicosRepository: IPostoServicosRepository,
  ) { }

  public async execute ({ nmPostoServico, qtdPessoaDia, stAtivo }: IRequest): Promise<PostoServico> {

    // if (nmPostoServico === "") {
    //   throw new AppError("O campo Nome do Posto de Serviço não pode estar vazio ou nulo.");
    // }

    const postoServico = this.postoServicosRepository.create({
      nm_posto_servico: nmPostoServico,
      qtd_pessoa_dia: qtdPessoaDia,
      st_ativo: stAtivo
    });

    return postoServico;
  }
}

export default CreatePostoServicoService;
