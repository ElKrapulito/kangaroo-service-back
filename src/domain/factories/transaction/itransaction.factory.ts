import { UUID } from 'crypto';
import { Account } from '../../models/account.model';
import { Transaction } from '../../models/transaction.model';
import { CategoryAbstract } from '../../model-abstracts/category.abstract';
import { TransactionType } from '../../enum/transaction-type.enum';

export interface ITransactionFactory {
  createTransaction(
    amount: number,
    account: UUID | Account,
    date: Date,
    type: TransactionType,
    category: UUID | CategoryAbstract,
  ): Transaction;
}

export const ITransactionFactory = Symbol('ITransactionFactory');
