import { UUID, randomUUID } from 'crypto';
import { TransferAbstract } from '../model-abstracts/transfer.abstract';
import { TransactionAbstract } from '../model-abstracts/transaction.abstract';
export class Transfer extends TransferAbstract {
  id: UUID;
  transactionWithdrown: TransactionAbstract | UUID;
  transactionBenefited: TransactionAbstract | UUID;

  constructor(
    transactionWithdrown: TransactionAbstract | UUID,
    transactionBenefited: TransactionAbstract | UUID,
  ) {
    super();
    this.id = randomUUID();
    this.transactionWithdrown = transactionWithdrown;
    this.transactionBenefited = transactionBenefited;
  }
}
