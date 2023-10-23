import { BaseRepositoryTypeOrm } from './base.repository';
import { IAccountRepository } from '../../../domain/repositories/iaccount.repository';
import { AccountEntity } from '../config/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class AccountRepository
  extends BaseRepositoryTypeOrm<AccountEntity>
  implements IAccountRepository
{
  constructor(
    @InjectRepository(AccountEntity) accountRepo: Repository<AccountEntity>,
  ) {
    super(accountRepo);
  }
}
