import { TransactionAbstract } from 'src/domain/model-abstracts/transaction.abstract';
import { TransferAbstract } from '../../domain/model-abstracts/transfer.abstract';
import { UUID } from 'crypto';
export class TransferDto extends TransferAbstract {
  transactionWithdrown: TransactionAbstract;
  transactionBenefited: TransactionAbstract;
  id: UUID;
}
