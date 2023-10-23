import { TransactionDto } from '../../../dto/transaction.dto';
export class CreateTransactionCommand {
  constructor(public readonly transaction: TransactionDto) {}
}
