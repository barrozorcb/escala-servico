import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import CreatePostoServicoService from '@modules/escala/services/CreatePostoServicoService';

export default class PostoServicosController {
  public async create (request: Request, response: Response): Promise<Response> {

    const { nmPostoServico, qtdPessoaDia, stAtivo, idPeriodoServico } = request.body;
    const createPostoServico = container.resolve(CreatePostoServicoService);

    const escala = await createPostoServico.execute({
      nmPostoServico,
      qtdPessoaDia,
      stAtivo,
      idPeriodoServico
    });

    return response.json(instanceToInstance(escala));
  }
}
