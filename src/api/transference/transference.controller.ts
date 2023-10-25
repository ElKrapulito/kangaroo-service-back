import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { TransferDto } from '../../application/dto/transfer.dto';
import { CreateTransferCommand } from 'src/application/use-cases/transfer/impl/create-transfer.command';

@Controller('transference')
export class TransferenceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createTransference(@Body() transfer: TransferDto) {
    return await this.commandBus.execute(new CreateTransferCommand(transfer));
  }
}
