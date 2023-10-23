import { UserAbstract } from '../../../../../domain/model-abstracts/user.abstract';
export class RegisterUserCommand {
  constructor(public readonly user: Partial<UserAbstract>) {}
}
