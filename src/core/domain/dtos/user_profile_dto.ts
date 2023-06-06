class UserProfileDto {
  name: string;
  birthDay: Date;
  message: string;
  userId: number;
  createAt?: Date;

  constructor ( { name, birthDay, message, userId }: UserProfileDto ) {
    this.name = name;
    this.birthDay = birthDay;
    this.message = message;
    this.userId = userId;
    this.createAt = new Date();
  }
}

export { UserProfileDto };
