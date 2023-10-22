import { User } from './user.model';
import { UUID } from 'crypto';
import { Entity } from '../../../kangaroo-kernel/src/core/entity';

export class Category extends Entity {
  name: string;
  user: User | UUID | undefined;
  amount: number;
  constructor(name: string, amount: number, user?: User | UUID) {
    super();
    this.name = name;
    this.amount = amount;
    this.user = user;
  }
}
