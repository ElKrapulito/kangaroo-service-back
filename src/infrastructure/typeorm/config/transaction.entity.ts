import { UUID } from 'crypto';
import { PrimaryColumn, ManyToOne, Entity, Column } from 'typeorm';
import { AccountAbstract } from 'src/domain/model-abstracts/account.abstract';
import { AccountEntity } from './account.entity';
import { TransactionAbstract } from '../../../domain/model-abstracts/transaction.abstract';

@Entity({ name: 'transactions' })
export class TransactionEntity extends TransactionAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @Column()
  type: string;

  @Column()
  category: string;

  @ManyToOne(() => AccountEntity)
  account: AccountAbstract;
}
