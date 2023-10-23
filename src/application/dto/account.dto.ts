import { UserAbstract } from 'src/domain/model-abstracts/user.abstract';
import { AccountAbstract } from '../../domain/model-abstracts/account.abstract';
import { UUID } from 'crypto';
export class AccountDto extends AccountAbstract {
  name: string;
  user: UserAbstract | UUID;
  amount: number;
  id: UUID;
}
