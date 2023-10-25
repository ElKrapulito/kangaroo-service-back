import { UUID } from 'crypto';
import { IRepository } from '../../../kangaroo-kernel/src/core/iRepository';
import { Account } from '../models/account.model';

export interface IAccountRepository extends IRepository<Account> {
  getAccountsByUserId(userId: UUID): Promise<Account[]>;
  getTotalBalance(userId: UUID): Promise<number>;
}
export const IAccountRepository = Symbol('IAccountRepository');
