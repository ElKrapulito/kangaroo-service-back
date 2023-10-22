import { User } from '../../models/user.model';
import { IUserFactory } from './iuser.factory';

export class UserFactory implements IUserFactory {
  createUser(
    name: string,
    email: string,
    password: string,
    dateOfBirth: Date,
  ): User {
    return new User(name, email, password, dateOfBirth);
  }
}
