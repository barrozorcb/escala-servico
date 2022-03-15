import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import PostoServicosController from '../controllers/PostoServicosController';

const postoServicosRouter = Router();

const postoServicosController = new PostoServicosController;

postoServicosRouter.post('/', celebrate({
  [Segments.BODY]: {
    nmPostoServico: Joi.string().required(),
    qtdPessoaDia: Joi.number().required(),
    stAtivo: Joi.boolean().required()
  }
}), postoServicosController.create);

export default postoServicosRouter;
