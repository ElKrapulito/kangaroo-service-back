import { UUID } from 'crypto';
import { TransferAbstract } from '../model-abstracts/transfer.abstract';
import { TransactionAbstract } from '../model-abstracts/transaction.abstract';
export class Transfer extends TransferAbstract {
  id: UUID;
  transactionWithdrown: TransactionAbstract;
  transactionBenefited: TransactionAbstract;

  constructor(
    transactionWithdrown: TransactionAbstract,
    transactionBenefited: TransactionAbstract,
  ) {
    super();
    this.id = crypto.randomUUID();
    this.transactionWithdrown = transactionWithdrown;
    this.transactionBenefited = transactionBenefited;
  }
}
