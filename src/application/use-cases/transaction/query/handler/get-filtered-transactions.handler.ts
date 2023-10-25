import { ITransactionRepository } from './../../../../../domain/repositories/itransaction.repository';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetFilteredTransactionQuery } from '../impl/get-filtered-transactions.query';
import { Inject } from '@nestjs/common';

export class GetFilteredTransactionsHandler
  implements IQueryHandler<GetFilteredTransactionQuery>
{
  constructor(
    @Inject(ITransactionRepository)
    private transactionRepository: ITransactionRepository,
  ) {}
  async execute(query: GetFilteredTransactionQuery): Promise<any> {
    const { startDate, endDate, accountIds, categoryId, transactionType } =
      query.filtersTransactionDto;
    return this.transactionRepository.filterTransaction(
      startDate,
      endDate,
      accountIds,
      categoryId,
      transactionType,
    );
  }
}
