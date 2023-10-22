import { UUID } from 'crypto';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { AccountAbstract } from '../../../domain/model-abstracts/account.abstract';
import { UserAbstract } from '../../../domain/model-abstracts/user.abstract';

@Entity({ name: 'accounts' })
export class AccountEntity extends AccountAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  name: string;

  @Column()
  amount: number;

  @ManyToOne(() => UserEntity)
  user: UserAbstract;
}
