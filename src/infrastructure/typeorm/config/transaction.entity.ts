import { UUID } from 'crypto';
import { PrimaryColumn, ManyToOne, Entity, Column } from 'typeorm';
import { AccountAbstract } from 'src/domain/model-abstracts/account.abstract';
import { AccountEntity } from './account.entity';
import { TransactionAbstract } from '../../../domain/model-abstracts/transaction.abstract';
import { TransactionType } from '../../../domain/enum/transaction-type.enum';
import { CategoryAbstract } from 'src/domain/model-abstracts/category.abstract';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'transactions' })
export class TransactionEntity extends TransactionAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @Column({ type: 'enum', enum: TransactionType })
  type: TransactionType;

  @ManyToOne(() => CategoryEntity)
  category: CategoryAbstract;

  @ManyToOne(() => AccountEntity)
  account: AccountAbstract;
}
