import { TransactionType } from './../../domain/enum/transaction-type.enum';
import { UUID } from 'crypto';

export class FiltersTransactionDto {
  userId: UUID;
  startDate?: Date;
  endDate?: Date;
  accountIds?: UUID[];
  categoryId?: UUID;
  transactionType?: TransactionType;
}
