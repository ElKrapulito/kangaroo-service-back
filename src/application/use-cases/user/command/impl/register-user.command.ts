import { UserDto } from '../../../../dto/user.dto';
export class RegisterUserCommand {
  constructor(public readonly user: UserDto) {}
}
