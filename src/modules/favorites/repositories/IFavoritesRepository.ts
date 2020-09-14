import Favorite from '../infra/typeorm/entities/Favorite';
import IFavoriteDTO from '../dtos/IFavoriteDTO';

export default interface IUsersInterface {
  findUserFavorites(user_id: string): Promise<Favorite[]>;
  findFavorite(data: IFavoriteDTO): Promise<Favorite | undefined>;
  create(data: IFavoriteDTO): Promise<Favorite>;
  remove(favorite_id: string): Promise<void>;
}
