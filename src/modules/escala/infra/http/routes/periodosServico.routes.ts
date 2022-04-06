import { Router } from 'express';

import PeriodoServicosController from '../controllers/PeriodoServicosController';

const periodosServicoRouter = Router();

const periodosServicoController = new PeriodoServicosController;

periodosServicoRouter.get('/', periodosServicoController.index);

export default periodosServicoRouter;
