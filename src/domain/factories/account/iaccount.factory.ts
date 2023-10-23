import { UUID } from 'crypto';
import { Account } from '../../models/account.model';
import { UserAbstract } from '../../model-abstracts/user.abstract';

export interface IAccountFactory {
  createAccount(
    name: string,
    user: UUID | UserAbstract,
    amount: number,
  ): Account;
}

export const IAccountFactory = Symbol('IAccountFactory');
