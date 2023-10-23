import { Transfer } from '../../models/transfer.model';
import { TransactionAbstract } from '../../model-abstracts/transaction.abstract';
import { UUID } from 'crypto';
export interface ITransferFactory {
  createFactory(
    transactionWithdrown: TransactionAbstract | UUID,
    transactionBenefited: TransactionAbstract | UUID,
  ): Transfer;
}

export const ITransferFactory = Symbol('ITransferFactory');
