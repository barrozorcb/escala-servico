import { Router } from 'express';
// import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.router';
// import providersRouter from '@modules/appointments/infra/http/routes/providers.router';
// import usersRouter from '@modules/users/infra/http/routes/users.routes';
// import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
// import passwordRouter from '@modules/users/infra/http/routes/password.routes';
// import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import postoServicosRouter from '@modules/escala/infra/http/routes/postoServicos.routes';

const routes = Router();

routes.use('/postoServico', postoServicosRouter);
// routes.use('/appointments', appointmentsRouter);
// routes.use('/providers', providersRouter);
// routes.use('/users', usersRouter);
// routes.use('/sessions', sessionsRouter);
// routes.use('/password', passwordRouter);
// routes.use('/profile', profileRouter);

export default routes;
