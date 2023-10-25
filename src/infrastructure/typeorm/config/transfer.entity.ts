import { TransactionAbstract } from 'src/domain/model-abstracts/transaction.abstract';
import { TransferAbstract } from '../../../domain/model-abstracts/transfer.abstract';
import { UUID } from 'crypto';
import { PrimaryColumn, Entity, OneToOne, JoinColumn } from 'typeorm';
import { TransactionEntity } from './transaction.entity';

@Entity({ name: 'transferences' })
export class TransferEntity extends TransferAbstract {
  @PrimaryColumn()
  id: UUID;

  @OneToOne(() => TransactionEntity, { eager: true })
  @JoinColumn()
  transactionWithdrown: TransactionAbstract;

  @OneToOne(() => TransactionEntity, { eager: true })
  @JoinColumn()
  transactionBenefited: TransactionAbstract;
}
