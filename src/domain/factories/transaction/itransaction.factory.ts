import { UUID } from 'crypto';
import { Account } from '../../models/account.model';
import { Transaction } from '../../models/transaction.model';

export interface ITransactionFactory {
  createTransaction(
    amount: number,
    account: UUID | Account,
    date: Date,
    type: string,
    category: string,
  ): Transaction;
}

export const ITransactionFactory = Symbol('ITransactionFactory');
