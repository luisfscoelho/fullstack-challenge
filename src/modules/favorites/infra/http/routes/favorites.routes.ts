import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FavoritesController from '../controller/FavoritesController';
import UserFavoritesController from '../controller/UserFavoritesController';

const coursesRouter = Router();

const favoritesController = new FavoritesController();
const userFavoritesController = new UserFavoritesController();

coursesRouter.post('/', ensureAuthenticated, favoritesController.create);

coursesRouter.get('/user', ensureAuthenticated, userFavoritesController.index);

coursesRouter.delete('/', ensureAuthenticated, favoritesController.delete);

export default coursesRouter;
