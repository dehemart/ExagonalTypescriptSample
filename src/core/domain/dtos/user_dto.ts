import { UserStatusEnum } from '../enums/user_status_enum';

interface UserDto {
  email: string;
  username: string;
  password: string;
  profile: UserProfileDto;
  status: UserStatusEnum;
  createAt?: Date;
}

interface UserProfileDto {
  name: string;
  birthDay: Date;
  message: string;
  userId: number;
  createAt?: Date;
}

export{ UserDto, UserProfileDto };
