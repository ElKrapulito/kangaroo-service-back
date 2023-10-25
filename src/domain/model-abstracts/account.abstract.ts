import { UUID } from 'crypto';
import { UserAbstract } from './user.abstract';
import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';

export abstract class AccountAbstract extends AggregateRoot {
  abstract name: string;
  abstract user: UUID | UserAbstract;
  abstract amount: number;
}
