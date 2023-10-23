import { UUID } from 'crypto';
export class AccountDto {
  name: string;
  user: UUID;
  amount: number;
}
