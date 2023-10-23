import { Entity } from 'kangaroo-kernel/src/core/entity';
import { TransactionAbstract } from './transaction.abstract';
import { UUID } from 'crypto';

export abstract class TransferAbstract extends Entity {
  abstract transactionWithdrown: TransactionAbstract | UUID;
  abstract transactionBenefited: TransactionAbstract | UUID;
}
