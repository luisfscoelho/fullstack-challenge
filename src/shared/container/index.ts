import { container } from 'tsyringe';

import '@modules/users/providers';

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository';
import CoursesRepository from '@modules/courses/infra/typeorm/repositories/CoursesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UseresRepository';

import IFavoritesRepository from '@modules/favorites/repositories/IFavoritesRepository';
import FavoritesRepository from '@modules/favorites/infra/typeorm/repositories/FavoritesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICoursesRepository>(
  'CoursesRepository',
  CoursesRepository,
);

container.registerSingleton<IFavoritesRepository>(
  'FavoritesRepository',
  FavoritesRepository,
);
