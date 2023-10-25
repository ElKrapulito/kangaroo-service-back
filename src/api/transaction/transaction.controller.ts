import { GetFilteredTransactionQuery } from './../../application/use-cases/transaction/query/impl/get-filtered-transactions.query';
import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { TransactionDto } from '../../application/dto/transaction.dto';
import { CreateTransactionCommand } from 'src/application/use-cases/transaction/command/impl/create-transaction.command';
import { FiltersTransactionDto } from '../../application/dto/filtered-transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createTransaction(@Body() transaction: TransactionDto) {
    return await this.commandBus.execute(
      new CreateTransactionCommand(transaction),
    );
  }

  @Post('filter')
  async filterTransaction(@Body() filters: FiltersTransactionDto) {
    return await this.queryBus.execute(
      new GetFilteredTransactionQuery(filters),
    );
  }
}
