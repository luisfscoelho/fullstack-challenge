import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CoursesController from '../controller/CoursesController';

const coursesRouter = Router();

const coursesController = new CoursesController();

coursesRouter.post('/', ensureAuthenticated, coursesController.create);

coursesRouter.get('/', coursesController.index);

coursesRouter.get('/:course_id', coursesController.show);

coursesRouter.put('/:course_id', ensureAuthenticated, coursesController.update);

coursesRouter.delete(
  '/:course_id',
  ensureAuthenticated,
  coursesController.delete,
);

export default coursesRouter;
