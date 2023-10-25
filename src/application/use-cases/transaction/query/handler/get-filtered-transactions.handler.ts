import { ITransactionRepository } from './../../../../../domain/repositories/itransaction.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetFilteredTransactionQuery } from '../impl/get-filtered-transactions.query';
import { Inject } from '@nestjs/common';

@QueryHandler(GetFilteredTransactionQuery)
export class GetFilteredTransactionsHandler
  implements IQueryHandler<GetFilteredTransactionQuery>
{
  constructor(
    @Inject(ITransactionRepository)
    private transactionRepository: ITransactionRepository,
  ) {}
  async execute(query: GetFilteredTransactionQuery): Promise<any> {
    const {
      userId,
      startDate,
      endDate,
      accountIds,
      categoryId,
      transactionType,
    } = query.filtersTransactionDto;
    return this.transactionRepository.filterTransaction(
      userId,
      startDate,
      endDate,
      accountIds,
      categoryId,
      transactionType,
    );
  }
}
