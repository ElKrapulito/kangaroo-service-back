import { UUID } from 'crypto';
import { AccountAbstract } from '../model-abstracts/account.abstract';
import { UserAbstract } from '../model-abstracts/user.abstract';
export class Account extends AccountAbstract {
  id: UUID;
  name: string;
  user: UUID | UserAbstract;
  amount: number;

  constructor(name: string, user: UUID | UserAbstract, amount: number) {
    super();
    this.id = crypto.randomUUID();
    this.name = name;
    this.user = user;
    this.amount = amount;
  }
}
