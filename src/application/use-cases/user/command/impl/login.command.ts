import { UserDto } from 'src/application/dto/user.dto';
export class LoginCommand {
  constructor(public readonly user: UserDto) {}
}
