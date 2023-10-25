import { IAccountRepository } from './../../../../../domain/repositories/iaccount.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAccountQuery } from '../impl/get-account.query';
import { Inject } from '@nestjs/common';

@QueryHandler(GetAccountQuery)
export class GetAccountHandler implements IQueryHandler<GetAccountQuery> {
  constructor(
    @Inject(IAccountRepository)
    private readonly accountRepository: IAccountRepository,
  ) {}
  async execute(query: GetAccountQuery): Promise<any> {
    return this.accountRepository.findById(query.accountId);
  }
}
