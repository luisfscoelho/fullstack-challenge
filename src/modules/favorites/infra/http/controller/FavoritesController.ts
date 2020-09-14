import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateFavoriteService from '@modules/favorites/services/CreateFavoriteService';
import DeleteFavoriteService from '@modules/favorites/services/DeleteFavoriteService';

export default class FavoritesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { course_id } = request.body;

      const createFavorite = container.resolve(CreateFavoriteService);

      const favorite = await createFavorite.execute({ user_id, course_id });

      return response.json(classToClass(favorite));
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { course_id } = request.body;

      const deleteFavorite = container.resolve(DeleteFavoriteService);

      await deleteFavorite.execute({ user_id, course_id });

      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
