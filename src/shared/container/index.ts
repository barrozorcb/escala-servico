import { container } from 'tsyringe';

//import '@modules/users/providers';
//import './providers';

// import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentRepository';
// import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

// import IUsersRepository from '@modules/users/repositories/IUsersRepository';
// import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

// import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
// import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

import PostoServicosRepository from '@modules/escala/infra/typeorm/repositories/PostoServicosRepository';
import IPostoServicosRepository from '@modules/escala/repositories/IPostoServicosRepository';

import PeriodosServicoRepository from '@modules/escala/infra/typeorm/repositories/PeriodosServicoRepository';
import IPeriodosServicoRepository from '@modules/escala/repositories/IPeriodosServicoRepository';

container.registerSingleton<IPostoServicosRepository>(
  'PostoServicosRepository',
  PostoServicosRepository
);

container.registerSingleton<IPeriodosServicoRepository>(
  'PeriodosServicoRepository',
  PeriodosServicoRepository
);
// container.registerSingleton<IAppointmentRepository>(
//   'AppointmentsRepository',
//   AppointmentsRepository
// );

// container.registerSingleton<IUsersRepository>(
//   'UsersRepository',
//   UsersRepository
// );

// container.registerSingleton<IUserTokensRepository>(
//   'UserTokensRepository',
//   UserTokensRepository
// );

// container.registerSingleton<INotificationsRepository>(
//   'NotificationsRepository',
//   NotificationsRepository
// );
