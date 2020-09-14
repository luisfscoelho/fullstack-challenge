import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListUserFavoritesService from '@modules/favorites/services/ListUserFavoritesService';

export default class UsersFavoritesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;

      const listUserFavorites = container.resolve(ListUserFavoritesService);

      const favorites = await listUserFavorites.execute({ user_id });

      return response.json(classToClass(favorites));
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
