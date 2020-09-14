import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Favorite from '../infra/typeorm/entities/Favorite';
import IFavoritesRepository from '../repositories/IFavoritesRepository';

interface IRequest {
  user_id: string;
  course_id: string;
}

@injectable()
export default class CreateCourseService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute(favoriteData: IRequest): Promise<Favorite> {
    const favoriteExist = await this.favoritesRepository.findFavorite(
      favoriteData,
    );

    if (favoriteExist) {
      throw new AppError('Favorite alredy exist');
    }

    const favorite = await this.favoritesRepository.create(favoriteData);

    return favorite;
  }
}
