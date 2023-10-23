import { UserAbstract } from 'src/domain/model-abstracts/user.abstract';
import { UUID } from 'crypto';

export class CategoryDto {
  name: string;
  user: UserAbstract | UUID;
}
