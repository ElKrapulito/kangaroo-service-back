import { IRepository } from 'kangaroo-kernel/src/core/iRepository';
import { Transaction } from '../models/transaction.model';
import { UUID } from 'crypto';
import { TransactionType } from '../enum/transaction-type.enum';

export interface ITransactionRepository extends IRepository<Transaction> {
  filterTransaction(
    startDate?: Date,
    endDate?: Date,
    accountIds?: UUID[],
    categoryId?: UUID,
    type?: TransactionType,
  ): Promise<Transaction[]>;
}
export const ITransactionRepository = Symbol('ITransactionRepository');
