import { UUID, randomUUID } from 'crypto';
import { UserAbstract } from '../model-abstracts/user.abstract';

export class User extends UserAbstract {
  id: UUID;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;

  constructor(
    name: string,
    email: string,
    password: string,
    dateOfBirth: Date,
  ) {
    super();
    this.id = randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
  }
}
