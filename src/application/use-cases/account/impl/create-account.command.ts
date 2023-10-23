import { AccountDto } from '../../../dto/account.dto';

export class CreateAccountCommand {
  constructor(public readonly account: AccountDto) {}
}
