import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { TransferEntity } from '../config/transfer.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { ITransferRepository } from '../../../domain/repositories/itransfer.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TransferRepository
  extends BaseRepositoryTypeOrm<TransferEntity>
  implements ITransferRepository
{
  constructor(
    @InjectRepository(TransferEntity)
    private transferRepository: Repository<TransferEntity>,
  ) {
    super(transferRepository);
  }
}
