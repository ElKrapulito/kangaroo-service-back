import { Account } from 'src/domain/models/account.model';
import { Transaction } from 'src/domain/models/transaction.model';
import { ITransactionFactory } from './itransaction.factory';
import { UUID } from 'crypto';
import { TransactionType } from '../../enum/transaction-type.enum';
import { CategoryAbstract } from '../../model-abstracts/category.abstract';

export class TransactionFactory implements ITransactionFactory {
  createTransaction(
    amount: number,
    account: UUID | Account,
    date: Date,
    type: TransactionType,
    category: UUID | CategoryAbstract,
  ): Transaction {
    return new Transaction(amount, account, date, type, category);
  }
}
