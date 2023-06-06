import { UserDto } from '../domain/dtos/user_dto';
import { UserGetByIdParams, UserUseCaseInterface } from '../ports/inbound/user_use_case_interface';
import { UserRepositoryInterface } from '../ports/outbound/UserRepositoryInterface';

class UserUseCase implements UserUseCaseInterface {
  private UserRepo: UserRepositoryInterface;

  constructor( userRepo: UserRepositoryInterface ){
    this.UserRepo = userRepo;
  }


  getUserById( { id }: UserGetByIdParams ): UserDto {
    const  userModel = this.UserRepo.getById( id );

    const userDto = new UserDto( {
      email: userModel.email,
      username: userModel.username,
      password: userModel.password,
      status: userModel.status } );

    return userDto;
  }

}

export { UserUseCase };
