import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import coursesRouter from '@modules/courses/infra/http/routes/courses.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import favoritesRouter from '@modules/favorites/infra/http/routes/favorites.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/courses', coursesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/favorites', favoritesRouter);

export default routes;
