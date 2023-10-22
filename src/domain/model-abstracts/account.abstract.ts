import { UUID } from 'crypto';
import { AggregateRoot } from 'kangaroo-kernel/src/core/aggregateRoot';
import { UserAbstract } from './user.abstract';

export abstract class AccountAbstract extends AggregateRoot {
  abstract name: string;
  abstract user: UUID | UserAbstract;
  abstract amount: number;
}
