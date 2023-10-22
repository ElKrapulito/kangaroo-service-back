import { UUID } from 'crypto';
import { Account } from '../../models/account.model';
import { User } from '../../models/user.model';
import { IAccountFactory } from './iaccount.factory';

export class AccountFactory implements IAccountFactory {
  createAccount(name: string, user: UUID | User, amount: number): Account {
    return new Account(name, user, amount);
  }
}
