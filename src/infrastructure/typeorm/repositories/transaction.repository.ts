import { TransactionEntity } from '../config/transaction.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { ITransactionRepository } from '../../../domain/repositories/itransaction.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/domain/models/transaction.model';
import { TransactionType } from 'src/domain/enum/transaction-type.enum';
import { UUID } from 'crypto';

@Injectable()
export class TransactionRepository
  extends BaseRepositoryTypeOrm<TransactionEntity>
  implements ITransactionRepository
{
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepo: Repository<TransactionEntity>,
  ) {
    super(transactionRepo);
  }

  async filterTransaction(
    userId: UUID,
    startDate?: Date,
    endDate?: Date,
    accountIds?: UUID[],
    categoryId?: UUID,
    transactionType?: TransactionType,
  ): Promise<Transaction[]> {
    const queryBuilder = this.transactionRepo
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.account', 'account')
      .leftJoinAndSelect('transaction.category', 'category')
      .where('1=1'); // Starting with a "true" condition to allow for easy chaining of filters

    queryBuilder.andWhere('account.userId = :userId', { userId });

    if (startDate && endDate) {
      queryBuilder.andWhere(
        'transaction.date BETWEEN :startDate AND :endDate',
        {
          startDate,
          endDate,
        },
      );
    }

    if (accountIds && accountIds.length > 0) {
      queryBuilder.andWhere('transaction.accountId IN (:...accountIds)', {
        accountIds,
      });
    }

    if (categoryId) {
      queryBuilder.andWhere('transaction.categoryId = :categoryId', {
        categoryId,
      });
    }

    if (transactionType) {
      queryBuilder.andWhere('transaction.type = :transactionType', {
        transactionType,
      });
    }

    const transactions = await queryBuilder.getMany();
    return transactions;
  }
}
