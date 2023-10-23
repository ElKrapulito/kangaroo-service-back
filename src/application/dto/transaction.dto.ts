import { UUID } from 'crypto';
import { TransactionType } from '../../domain/enum/transaction-type.enum';
export class TransactionDto {
  amount: number;
  account: UUID;
  date: Date;
  type: TransactionType;
  category: string;
}
