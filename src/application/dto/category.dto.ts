import { UserAbstract } from 'src/domain/model-abstracts/user.abstract';
import { CategoryAbstract } from '../../domain/model-abstracts/category.abstract';
import { UUID } from 'crypto';

export class CategoryDto extends CategoryAbstract {
  name: string;
  user: UserAbstract | UUID;
  amount: number;
  id: UUID;
}
