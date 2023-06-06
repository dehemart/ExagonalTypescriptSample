import { UserProfileDto } from '../dtos/user_dto';

export class UserProfile {
  id?: number | undefined;
  name: string;
  birthDay: Date;
  message:  string;
  userId:   number;
  createAt?: Date;

  constructor( { name, birthDay, message, userId }: UserProfileDto ){
    this.id;
    this.name = name;
    this.birthDay = birthDay;
    this.message = message;
    this.userId = userId;
    this.createAt = new Date();
  }
}
