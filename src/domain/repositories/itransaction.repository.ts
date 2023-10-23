import { IRepository } from 'kangaroo-kernel/src/core/iRepository';
import { Transaction } from '../models/transaction.model';

export interface ITransactionRepository extends IRepository<Transaction> {}
export const ITransactionRepository = Symbol('ITransactionRepository');
