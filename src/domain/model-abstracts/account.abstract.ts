import { UUID } from 'crypto';
import { AggregateRoot } from 'kangaroo-kernel/src/core/aggregateRoot';
import { UserAbstract } from './user.abstract';

export abstract class AccountAbstract extends AggregateRoot {
  name: string;
  user: UUID | UserAbstract;
  amount: number;
}
