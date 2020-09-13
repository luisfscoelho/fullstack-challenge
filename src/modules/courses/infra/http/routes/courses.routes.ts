import { Router } from 'express';

import CoursesController from '../controller/CoursesController';

const coursesRouter = Router();

const coursesController = new CoursesController();

coursesRouter.post('/', coursesController.create);

coursesRouter.get('/', coursesController.index);

coursesRouter.get('/:course_id', coursesController.show);

coursesRouter.put('/:course_id', coursesController.update);

coursesRouter.delete('/:course_id', coursesController.delete);

export default coursesRouter;
