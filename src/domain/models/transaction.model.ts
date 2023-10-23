import { UUID, randomUUID } from 'crypto';
import { TransactionAbstract } from '../model-abstracts/transaction.abstract';
import { AccountAbstract } from '../model-abstracts/account.abstract';
import { TransactionType } from '../enum/transaction-type.enum';
import { CategoryAbstract } from '../model-abstracts/category.abstract';
export class Transaction extends TransactionAbstract {
  id: UUID;
  amount: number;
  account: UUID | AccountAbstract;
  date: Date;
  type: TransactionType;
  category: CategoryAbstract | UUID;

  constructor(
    amount: number,
    account: UUID | AccountAbstract,
    date: Date,
    type: TransactionType,
    category: CategoryAbstract | UUID,
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
