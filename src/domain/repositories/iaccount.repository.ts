import { IRepository } from 'kangaroo-kernel/src/core/iRepository';
import { Account } from '../models/account.model';

export interface IAccountRepository extends IRepository<Account> {}
export const IAccountRepository = Symbol('IAccountRepository');
