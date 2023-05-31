import { UserStatusEnum } from '../enums/user_status_enum';

interface UserDto {
  id?: number;
  email: string;
  username: string;
  password: string;
  profile: UserProfileDto;
  status: UserStatusEnum;
  createAt?: Date;
}

interface UserProfileDto {
  id?: number;
  name: string;
  birthDay: Date;
  message: string;
  createAt?: Date;
}

export{ UserDto, UserProfileDto };
