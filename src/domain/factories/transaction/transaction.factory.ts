import { Account } from 'src/domain/models/account.model';
import { Transaction } from 'src/domain/models/transaction.model';
import { ITransactionFactory } from './itransaction.factory';
import { UUID } from 'crypto';

export class TransactionFactory implements ITransactionFactory {
  createTransaction(
    amount: number,
    account: UUID | Account,
    date: Date,
    type: string,
    category: string,
  ): Transaction {
    return new Transaction(amount, account, date, type, category);
  }
}
