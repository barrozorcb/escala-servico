import { injectable, inject } from 'tsyringe';

import IPostoServicosRepository from '../repositories/IPostoServicosRepository';
import PostoServico from '@modules/escala/infra/typeorm/entities/PostoServico';

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


    const postoServico = this.postoServicosRepository.create({
      nmPostoServico,
      qtdPessoaDia,
      stAtivo
    });



    return postoServico;
  }
}

export default CreatePostoServicoService;
