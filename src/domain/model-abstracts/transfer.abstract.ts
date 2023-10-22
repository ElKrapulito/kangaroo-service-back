import { Entity } from 'kangaroo-kernel/src/core/entity';
import { TransactionAbstract } from './transaction.abstract';

export abstract class TransferAbstract extends Entity {
  abstract transactionWithdrown: TransactionAbstract;
  abstract transactionBenefited: TransactionAbstract;
}
