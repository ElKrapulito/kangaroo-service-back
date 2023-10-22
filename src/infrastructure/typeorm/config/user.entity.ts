import { UUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UserAbstract } from '../../../domain/model-abstracts/user.abstract';

@Entity({ name: 'users' })
export class UserEntity extends UserAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  dateOfBirth: Date;
}
