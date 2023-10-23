import { UUID, randomUUID } from 'crypto';
import { TransactionAbstract } from '../model-abstracts/transaction.abstract';
import { AccountAbstract } from '../model-abstracts/account.abstract';
export class Transaction extends TransactionAbstract {
  id: UUID;
  amount: number;
  account: UUID | AccountAbstract;
  date: Date;
  type: string;
  category: string;

  constructor(
    amount: number,
    account: UUID | AccountAbstract,
    date: Date,
    type: string,
    category: string,
  ) {
    super();
    this.id = randomUUID();
    this.amount = amount;
    this.account = account;
    this.date = date;
    this.type = type;
    this.category = category;
  }
}
