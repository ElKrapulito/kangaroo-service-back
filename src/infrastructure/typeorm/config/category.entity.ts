import { UUID } from 'crypto';
import { UserEntity } from './user.entity';
import { PrimaryColumn, ManyToOne, Column, Entity } from 'typeorm';
import { CategoryAbstract } from '../../../domain/model-abstracts/category.abstract';
import { UserAbstract } from '../../../domain/model-abstracts/user.abstract';

@Entity({ name: 'categories' })
export class CategoryEntity extends CategoryAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  name: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  user: UserAbstract;
}
