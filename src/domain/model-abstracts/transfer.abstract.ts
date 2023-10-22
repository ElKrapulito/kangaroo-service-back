import { Entity } from 'kangaroo-kernel/src/core/entity';
import { TransactionAbstract } from './transaction.abstract';

export abstract class TransferAbstract extends Entity {
  transactionWithdrown: TransactionAbstract;
  transactionBenefited: TransactionAbstract;
}
