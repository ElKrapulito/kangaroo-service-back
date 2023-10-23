import { TransactionEntity } from '../config/transaction.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { ITransactionRepository } from '../../../domain/repositories/itransaction.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

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
}
