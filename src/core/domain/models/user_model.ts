import { UserDto } from '../dtos/user_dto';
import { UserStatusEnum } from '../enums/user_status_enum';
import { UserProfile } from './user_profile_model';

export class UserModel {
  id?: number;
  email: string;
  username: string;
  password: string;
  profile: UserProfile;
  status: UserStatusEnum;
  createAt?: Date;

  constructor( { email, username, password, profile }: UserDto ){
    this.id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.profile = profile;
    this.status = UserStatusEnum.CREATED;
    this.createAt = new Date();
  }
}
