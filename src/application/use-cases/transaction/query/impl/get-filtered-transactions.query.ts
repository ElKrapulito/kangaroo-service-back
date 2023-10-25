import { FiltersTransactionDto } from '../../../../dto/filtered-transaction.dto';
export class GetFilteredTransactionQuery {
  constructor(public readonly filtersTransactionDto: FiltersTransactionDto) {}
}
