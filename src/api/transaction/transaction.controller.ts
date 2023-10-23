import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { TransactionDto } from '../../application/dto/transaction.dto';
import { CreateTransactionCommand } from 'src/application/use-cases/transaction/impl/create-transaction.command';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('new')
  async createTransaction(@Body() transaction: TransactionDto) {
    return await this.commandBus.execute(
      new CreateTransactionCommand(transaction),
    );
  }
}
