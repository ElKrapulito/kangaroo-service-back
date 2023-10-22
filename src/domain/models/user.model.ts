import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';

export class User extends AggregateRoot {
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
    this.name = name;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
  }
}
