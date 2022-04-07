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
    const periodosServico = this.periodosServicoRepository.findAll();
    return periodosServico;
  }
}

export default GetPeriodosServicoService;
