interface UserDto {
  id: number;
  email:    string;
  username: string;
  password: string;
  profile: UserProfileDto;
  createAt: Date;
}

interface UserProfileDto {
  id:       number;
  name:     string;
  birthDay: Date;
  message:  string;
  userId: number;
  createAt: Date;
}

export{ UserDto, UserProfileDto };
