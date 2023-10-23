import { UUID, randomUUID } from 'crypto';
import { CategoryAbstract } from '../model-abstracts/category.abstract';
import { UserAbstract } from '../model-abstracts/user.abstract';

export class Category extends CategoryAbstract {
  id: UUID;
  name: string;
  user: UserAbstract | UUID | undefined;
  constructor(name: string, user?: UserAbstract | UUID) {
    super();
    this.id = randomUUID();
    this.name = name;
    this.user = user;
  }
}
