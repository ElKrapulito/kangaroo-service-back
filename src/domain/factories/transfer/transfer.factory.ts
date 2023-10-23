import { TransactionAbstract } from 'src/domain/model-abstracts/transaction.abstract';
import { Transfer } from 'src/domain/models/transfer.model';
import { ITransferFactory } from './itransfer.factory';
import { UUID } from 'crypto';

export class TransferFactory implements ITransferFactory {
  createFactory(
    transactionWithdrown: UUID | TransactionAbstract,
    transactionBenefited: UUID | TransactionAbstract,
  ): Transfer {
    return new Transfer(transactionWithdrown, transactionBenefited);
  }
}
