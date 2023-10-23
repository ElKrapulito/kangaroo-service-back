import { UserAbstract } from '../../../../../domain/model-abstracts/user.abstract';
export class LoginCommand {
  constructor(public readonly user: UserAbstract) {}
}
