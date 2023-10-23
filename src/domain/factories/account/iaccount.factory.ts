import { UUID } from 'crypto';
import { Account } from '../../models/account.model';
import { User } from '../../models/user.model';

export interface IAccountFactory {
  createAccount(name: string, user: UUID | User, amount: number): Account;
}

export const IAccountFactory = Symbol('IAccountFactory');
