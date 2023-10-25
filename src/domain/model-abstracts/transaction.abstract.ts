import { UUID } from 'crypto';
import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';
import { AccountAbstract } from './account.abstract';
import { TransactionType } from '../enum/transaction-type.enum';
import { CategoryAbstract } from './category.abstract';
import { TransactionCreatedEvent } from '../../application/use-cases/transaction/events/impl/transaction-created.event';

export abstract class TransactionAbstract extends AggregateRoot {
  abstract amount: number;
  abstract account: UUID | AccountAbstract;
  abstract date: Date;
  abstract type: TransactionType;
  abstract category: CategoryAbstract | UUID;

  updateAccountAmount() {
    this.apply(
      new TransactionCreatedEvent(this.account as UUID, this.amount, this.type),
    );
  }
}
