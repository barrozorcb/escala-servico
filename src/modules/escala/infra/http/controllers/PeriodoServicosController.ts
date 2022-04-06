import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetPeriodosServicoService from '@modules/escala/services/GetPeriodosServicoService';


export default class PeriodoServicosController {
  public async index (request: Request, response: Response): Promise<Response> {
    console.log('chegou no controller');
    const getPeriodosServico = container.resolve(GetPeriodosServicoService);

    const periodosServico = await getPeriodosServico.execute();

    return response.json(periodosServico);
  }
}
