import { getRepository, Repository } from 'typeorm';

import IFavoritesRepository from '@modules/favorites/repositories/IFavoritesRepository';
import IFavoriteDTO from '@modules/favorites/dtos/IFavoriteDTO';
import Favorite from '../entities/Favorite';

export default class FavoritesRepository implements IFavoritesRepository {
  private ormRepository: Repository<Favorite>;

  constructor() {
    this.ormRepository = getRepository(Favorite);
  }

  public async findFavorite({
    user_id,
    course_id,
  }: IFavoriteDTO): Promise<Favorite | undefined> {
    const favorite = this.ormRepository.findOne({
      where: { user_id, course_id },
    });

    return favorite;
  }

  public async findUserFavorites(user_id: string): Promise<Favorite[]> {
    const favorites = await this.ormRepository.find({
      where: { user_id },
    });

    return favorites;
  }

  public async create({ course_id, user_id }: IFavoriteDTO): Promise<Favorite> {
    const favorite = this.ormRepository.create({ course_id, user_id });

    await this.ormRepository.save(favorite);

    return favorite;
  }

  public async remove(favorite_id: string): Promise<void> {
    await this.ormRepository.delete(favorite_id);
  }
}
