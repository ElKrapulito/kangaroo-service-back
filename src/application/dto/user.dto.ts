import { UUID } from 'crypto';
import { UserAbstract } from '../../domain/model-abstracts/user.abstract';
export class UserDto extends UserAbstract {
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  id: UUID;
}
