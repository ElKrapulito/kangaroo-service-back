import { UUID } from 'crypto';
import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';
import { AccountAbstract } from './account.abstract';

export abstract class TransactionAbstract extends AggregateRoot {
  abstract amount: number;
  abstract account: UUID | AccountAbstract;
  abstract date: Date;
  abstract type: string;
  abstract category: string;
}
