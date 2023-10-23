import { UUID } from 'crypto';
export class TransactionDto {
  amount: number;
  account: UUID;
  date: Date;
  type: string;
  category: string;
}
