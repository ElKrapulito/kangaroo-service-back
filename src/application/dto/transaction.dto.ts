import { UUID } from 'crypto';
import { AccountAbstract } from 'src/domain/model-abstracts/account.abstract';
import { TransactionAbstract } from 'src/domain/model-abstracts/transaction.abstract';
export class TransactionDto extends TransactionAbstract {
  amount: number;
  account: UUID | AccountAbstract;
  date: Date;
  type: string;
  category: string;
  id: UUID;
}
