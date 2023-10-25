import { GetUserAccountsQuery } from './../../application/use-cases/account/queries/impl/get-user-accounts.query';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AccountDto } from 'src/application/dto/account.dto';
import { CreateAccountCommand } from 'src/application/use-cases/account/command/impl/create-account.command';
import { GetAccountQuery } from '../../application/use-cases/account/queries/impl/get-account.query';
import { UUID } from 'crypto';

@Controller('account')
export class AccountController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('new')
  async createAccount(@Body() account: AccountDto) {
    return await this.commandBus.execute(new CreateAccountCommand(account));
  }

  @Get('user/:id')
  async getAccountsByUser(@Param('id') id: UUID) {
    return await this.queryBus.execute(new GetUserAccountsQuery(id));
  }

  @Get(':id')
  async getAccount(@Param('id') id: UUID) {
    return await this.queryBus.execute(new GetAccountQuery(id));
  }
}
