import { UUID } from 'crypto';

export class TransferDto {
  accountWithdrown: UUID;
  accountBenefited: UUID;
  amount: number;
}
