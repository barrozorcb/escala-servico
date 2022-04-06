import { injectable, inject } from 'tsyringe';

import IPeriodosServicoRepository from '../repositories/IPeriodosServicoRepository';
import PeriodoServico from '../infra/typeorm/entities/PeriodoServico';
// import AppError from '@shared/errors/AppError';

@injectable()
class GetPeriodosServicoService {
  constructor(
    @inject('PeriodosServicoRepository')
    private periodosServicoRepository: IPeriodosServicoRepository,
  ) { }

  public async execute (): Promise<PeriodoServico[]> {

    // if (nmPostoServico === "") {
    //   throw new AppError("O campo Nome do Posto de Serviço não pode estar vazio ou nulo.");
    // }

    const periodosServico = this.periodosServicoRepository.findAll();
    console.log('chegou no service');
    console.log(periodosServico);

    return periodosServico;
  }
}

export default GetPeriodosServicoService;
