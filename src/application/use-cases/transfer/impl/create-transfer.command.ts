import { TransferDto } from '../../../dto/transfer.dto';

export class CreateTransferCommand {
  constructor(public readonly transfer: TransferDto) {}
}
