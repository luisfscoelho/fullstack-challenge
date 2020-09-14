import { injectable, inject } from 'tsyringe';

import Favorite from '../infra/typeorm/entities/Favorite';
import IFavoritesRepository from '../repositories/IFavoritesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
export default class ListUserFavoritesService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Favorite[]> {
    const favorite = await this.favoritesRepository.findUserFavorites(user_id);

    return favorite;
  }
}
