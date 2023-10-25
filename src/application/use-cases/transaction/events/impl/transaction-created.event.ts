import { UUID } from 'crypto';
import { TransactionType } from '../../../../../domain/enum/transaction-type.enum';

export class TransactionCreatedEvent {
  constructor(
    public readonly accountId: UUID,
    public readonly amount: number,
    public readonly type: TransactionType,
  ) {}
}
