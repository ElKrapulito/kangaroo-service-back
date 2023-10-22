import { UUID } from 'crypto';
import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';
import { Account } from './account.model';
export class Transaction extends AggregateRoot {
  amount: number;
  account: UUID | Account;
  date: Date;
  type: string;
  category: string;

  constructor(
    amount: number,
    account: UUID | Account,
    date: Date,
    type: string,
    category: string,
  ) {
    super();
    this.amount = amount;
    this.account = account;
    this.date = date;
    this.type = type;
    this.category = category;
  }
}
