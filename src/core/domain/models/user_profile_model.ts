import { UserProfileDto } from '../dtos/user_profile_dto';

export class UserProfile {
  private id?: number | undefined;
  private name: string;
  private birthDay: Date;
  private message:  string;
  private userId:   number;
  private createAt?: Date;

  constructor( { name, birthDay, message, userId }: UserProfileDto ){
    this.id;
    this.name = name;
    this.birthDay = birthDay;
    this.message = message;
    this.userId = userId;
    this.createAt = new Date();
  }
}
