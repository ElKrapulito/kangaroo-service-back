import { BaseRepositoryTypeOrm } from './base.repository';
import { IAccountRepository } from '../../../domain/repositories/iaccount.repository';
import { AccountEntity } from '../config/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Account } from 'src/domain/models/account.model';
import { UUID } from 'crypto';
@Injectable()
export class AccountRepository
  extends BaseRepositoryTypeOrm<AccountEntity>
  implements IAccountRepository
{
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepo: Repository<AccountEntity>,
  ) {
    super(accountRepo);
  }
  async getAccountsByUserId(userId: UUID): Promise<Account[]> {
    return this.accountRepo.find({ where: { user: { id: userId } } });
  }

  async getTotalBalance(userId: UUID): Promise<number> {
    return (
      await this.accountRepo.find({ where: { user: { id: userId } } })
    ).reduce((total, current) => {
      total += current.amount;
      return total;
    }, 0);
  }
}
