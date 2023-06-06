import { UserStatusEnum } from '../enums/user_status_enum';

class UserDto {
  email: string;
  username: string;
  password: string;
  status: UserStatusEnum;
  createAt?: Date;

  constructor ( { email, username, password, status }: UserDto ) {

    this.email = email;
    this.username = username;
    this.password = password;
    this.status = status;
    this.createAt = new Date();
  }
}

export{ UserDto };
