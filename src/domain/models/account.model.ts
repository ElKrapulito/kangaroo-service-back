import { UUID } from 'crypto';
import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';
import { User } from './user.model';
export class Account extends AggregateRoot {
  name: string;
  user: UUID | User;
  amount: number;

  constructor(name: string, user: UUID | User, amount: number) {
    super();
    this.name = name;
    this.user = user;
    this.amount = amount;
  }
}
