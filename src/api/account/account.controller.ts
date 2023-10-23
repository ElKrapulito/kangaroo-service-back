import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AccountDto } from 'src/application/dto/account.dto';
import { CreateAccountCommand } from 'src/application/use-cases/account/impl/create-account.command';

@Controller('account')
export class AccountController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createAccount(@Body() account: AccountDto) {
    return await this.commandBus.execute(new CreateAccountCommand(account));
  }
}
