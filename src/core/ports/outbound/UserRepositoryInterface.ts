import { UserModel } from '../../domain/models/user_model';

export interface AccessUserData {
  username: string;
  password: string;
}

export interface UserRepositoryInterface {
  getById( id: number ): UserModel;
  getByAccessData( { username, password }: AccessUserData ): UserModel;
  listAll(): [UserModel]
  create( user: UserModel ): UserModel;
  update( user: UserModel ): UserModel;
  delete( id: number ): boolean;
}
