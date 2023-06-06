import { UserDto } from '../../domain/dtos/user_dto';

type UserGetByIdParams = {
  id: number;
}

interface UserUseCaseInterface {
   getUserById( { id }: UserGetByIdParams ): UserDto;
}

export { UserUseCaseInterface, UserGetByIdParams };
