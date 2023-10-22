import { UUID } from 'crypto';
import { CategoryAbstract } from '../model-abstracts/category.abstract';
import { UserAbstract } from '../model-abstracts/user.abstract';

export class Category extends CategoryAbstract {
  id: UUID;
  name: string;
  user: UserAbstract | UUID | undefined;
  amount: number;
  constructor(name: string, amount: number, user?: UserAbstract | UUID) {
    super();
    this.id = crypto.randomUUID();
    this.name = name;
    this.amount = amount;
    this.user = user;
  }
}
