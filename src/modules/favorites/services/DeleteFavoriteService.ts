import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IFavoritesRepository from '../repositories/IFavoritesRepository';

interface IRequest {
  course_id: string;
  user_id: string;
}

@injectable()
export default class DeleteFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({ course_id, user_id }: IRequest): Promise<void> {
    const favorite = await this.favoritesRepository.findFavorite({
      user_id,
      course_id,
    });

    if (!favorite) {
      throw new AppError('Favorite not found');
    }

    if (favorite.user_id !== user_id) {
      throw new AppError('You can not delete this favorite');
    }

    await this.favoritesRepository.remove(favorite.id);
  }
}
