import { IRepository } from '../../../kangaroo-kernel/src/core/iRepository';
import { User } from '../models/user.model';
export interface IUserRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User>;
}
export const IUserRepository = Symbol('IUserRepository');
